import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classnames from 'classnames';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Card, CardContent } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import style from './FieldTemplate.scss';

const primitiveTypes = ['boolean', 'string', 'number', 'integer'];
const isMultipleSelect = (schema) => schema.type === 'array' && schema.uniqueItems && (schema.items || {}).enum;
const hasTitleAlready = (schema) => primitiveTypes.includes(schema.type) || isMultipleSelect(schema);
const isExpandable = (uiOptions = {}) => uiOptions.expandable;

const getWrappedElement = (uiOptions = {}, label) => (element) => {
  if (isExpandable(uiOptions)) {
    return (
      <ExpansionPanel square>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className="rjf-expandable-title">{label}</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div style={{ width: '100%' }}>{element}</div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
  if (uiOptions.wrapped) {
    return (
      <Card>
        <CardContent>{element}</CardContent>
      </Card>
    );
  }
  return element;
};

function FieldTemplate({ id, classNames, label, description, errors, children, schema, uiSchema }) {
  const filteredClassNames = classNames
    .split(' ')
    .filter((className) => !['form-group', 'field'].includes(className))
    .join(' ');
  return (
    <div id={id} className={classnames('rjf-field', filteredClassNames)}>
      <div
        className={classnames({ 'primitive-fields-max-width': primitiveTypes.includes(schema.type) || isMultipleSelect(schema) })}
      >
        {getWrappedElement(
          uiSchema['ui:options'],
          label,
        )(
          <>
            {label && !hasTitleAlready(schema) && !isExpandable(uiSchema['ui:options']) && (
              <div className="rjf-title">{label}</div>
            )}
            {description}
            {children}
          </>,
        )}
      </div>
      {errors}
    </div>
  );
}

FieldTemplate.propTypes = {
  id: PropTypes.string.isRequired,
  classNames: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  errors: PropTypes.node.isRequired,
  schema: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
  uiSchema: PropTypes.shape({
    'ui:options': PropTypes.shape({
      expandable: PropTypes.bool,
      wrapped: PropTypes.bool,
    }),
  }).isRequired,
};

export default withStyles(style)(FieldTemplate);
