import PropTypes from 'prop-types';
import * as constants from './constants';

const reactJsonSchemaFormPropTypes = {
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object,
  formData: PropTypes.any,
  widgets: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])),
  fields: PropTypes.objectOf(PropTypes.func),
  ArrayFieldTemplate: PropTypes.func,
  ObjectFieldTemplate: PropTypes.func,
  FieldTemplate: PropTypes.func,
  ErrorList: PropTypes.func,
  onChange: PropTypes.func,
  onError: PropTypes.func,
  showErrorList: PropTypes.bool,
  onSubmit: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  tagName: PropTypes.string,
  name: PropTypes.string,
  method: PropTypes.string,
  target: PropTypes.string,
  action: PropTypes.string,
  autocomplete: PropTypes.string,
  enctype: PropTypes.string,
  acceptcharset: PropTypes.string,
  noValidate: PropTypes.bool,
  noHtml5Validate: PropTypes.bool,
  liveValidate: PropTypes.bool,
  validate: PropTypes.func,
  transformErrors: PropTypes.func,
  safeRenderCompletion: PropTypes.bool,
  formContext: PropTypes.object,
  customFormats: PropTypes.object,
  additionalMetaSchemas: PropTypes.arrayOf(PropTypes.object),
  omitExtraData: PropTypes.bool,
};

export const rawFormPropTypes = {
  ...reactJsonSchemaFormPropTypes,
  customSchema: PropTypes.object,
  widgets: PropTypes.object,
  fields: PropTypes.object,
  className: PropTypes.string,
  showErrorList: PropTypes.bool,
  preview: PropTypes.bool,
};

export const rawFormDefaultPropTypes = {
  customSchema: {},
  widgets: {},
  fields: {},
  className: '',
  showErrorList: undefined,
  preview: false,
};

export const formGeneratorPropTypes = {
  ...rawFormPropTypes,
  shouldShowPreview: PropTypes.bool,
  submitLabel: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(constants.formGeneratorThemes)),
};

export const formGeneratorDefaultPropTypes = {
  shouldShowPreview: true,
  className: '',
  formContext: {},
  submitLabel: 'ارسال',
  theme: constants.formGeneratorThemes.NO_THEME,
};
