import PropTypes from 'prop-types';
import React from 'react';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import { getUrl, getCalculatedUrlBfs, notifyError } from '../../utils';
import { Button, buttonThemes } from 'tapsi-components';

function ActionField({ schema, formContext: { formData, fetchApi, fetchApiConfig } }) {
  const execAction = async () => {
    if (schema.actionType === 'api-call') {
      try {
        await fetchApi(`${getUrl(schema.url, getCalculatedUrlBfs(schema.url, formData))}`, {
          method: schema.method,
          ...(fetchApiConfig && fetchApiConfig[schema.method] ? fetchApiConfig[schema.method]() : {}),
        });
      } catch (e) {
        notifyError(e.message || e.code || 'خطا در اجرای اکشن');
      }
    }
  };

  return (
    <Button startIcon={<CallToActionIcon />} theme={buttonThemes.THEME_3} onClick={execAction}>
      {schema.title}
    </Button>
  );
}
ActionField.propTypes = {
  schema: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    actionType: PropTypes.string,
    url: PropTypes.string,
    method: PropTypes.string,
  }).isRequired,
  formContext: PropTypes.object.isRequired,
};

export default ActionField;
