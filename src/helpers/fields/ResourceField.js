import React from 'react';
import PropTypes from 'prop-types';
import { deepGetBfs, getQueriedUrl as frontAdvancedGetQueriedUrl } from '../../utils';

function ResourceField({ schema, formContext }) {
  const { formData = {}, baseFrontFormsUrl } = formContext;
  const urlParameters = { [schema.join.to]: deepGetBfs(formData, schema.join.from) || '' };
  return (
    <div className="resource-field">
      <div>{schema.title}</div>
      <div>
        <a href={frontAdvancedGetQueriedUrl(`${baseFrontFormsUrl}/${schema.key}`, urlParameters)}>رفتن به بخش {schema.title}</a>
      </div>
    </div>
  );
}

ResourceField.propTypes = {
  schema: PropTypes.shape({
    title: PropTypes.string,
    key: PropTypes.string,
    join: PropTypes.shape({
      from: PropTypes.string,
      to: PropTypes.string,
    }),
  }).isRequired,
  formContext: PropTypes.shape({
    formData: PropTypes.object,
    baseFrontFormsUrl: PropTypes.string,
  }).isRequired,
};

export default ResourceField;
