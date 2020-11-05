import React from 'react';
import Form from 'react-jsonschema-form';
import deepMerge from 'deepmerge';
import formGridSystem from './helpers/gridSystemClasses.scss';
import rawJsonToJsonSchemaAndUiSchema from './helpers/rawJsonToJsonSchemaAndUiSchema';
import FieldTemplate from './helpers/templates/FieldTemplate';
import ArrayFieldTemplate from './helpers/templates/ArrayFieldTemplate';
import ObjectFieldTemplate from './helpers/templates/ObjectFieldTemplate';
import customFields from './helpers/fields';
import tapsiWidgets from './helpers/widgets/tapsiWidgets';
import previewWidgets from './helpers/widgets/preview';
import { rawFormDefaultPropTypes, rawFormPropTypes } from './propTypes';

export const removeEmptyObjectsAndUndefined = ({ ...obj }) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      if (Object.keys(obj[key]).length > 0) {
        // eslint-disable-next-line no-param-reassign
        obj[key] = removeEmptyObjectsAndUndefined(obj[key]);
      }
      if (Object.keys(obj[key]).length === 0) {
        // eslint-disable-next-line no-param-reassign
        delete obj[key];
      }
    }
    if (obj[key] === undefined) {
      // eslint-disable-next-line no-param-reassign
      delete obj[key];
    }
  });
  return obj;
};

function RawForm({ customSchema, widgets, fields, className, showErrorList, preview, onSubmit, ...restProps }) {
  const [schema, uiSchema] = rawJsonToJsonSchemaAndUiSchema(customSchema);
  const computedWidgets = deepMerge(preview ? previewWidgets : tapsiWidgets, widgets);
  const computedFields = deepMerge(preview ? { DescriptionField: () => null } : {}, { ...customFields, ...fields });
  const computedShowErrorList = showErrorList === undefined ? !preview : showErrorList;
  window.deepMerge = deepMerge;
  return (
    <Form
      className={`rjf-raw-form ${className}`}
      schema={schema}
      uiSchema={uiSchema}
      FieldTemplate={FieldTemplate}
      ArrayFieldTemplate={ArrayFieldTemplate}
      ObjectFieldTemplate={ObjectFieldTemplate}
      widgets={computedWidgets}
      fields={computedFields}
      showErrorList={computedShowErrorList}
      noHtml5Validate
      onSubmit={(data) => onSubmit({ ...data, formData: removeEmptyObjectsAndUndefined(data.formData) })}
      {...(preview ? { disabled: true } : {})}
      {...restProps}
    />
  );
}

RawForm.propTypes = rawFormPropTypes;

RawForm.defaultProps = rawFormDefaultPropTypes;

export default RawForm;
