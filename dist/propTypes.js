"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formGeneratorDefaultPropTypes = exports.formGeneratorPropTypes = exports.rawFormDefaultPropTypes = exports.rawFormPropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var constants = _interopRequireWildcard(require("./constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reactJsonSchemaFormPropTypes = {
  schema: _propTypes["default"].object.isRequired,
  uiSchema: _propTypes["default"].object,
  formData: _propTypes["default"].any,
  widgets: _propTypes["default"].objectOf(_propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object])),
  fields: _propTypes["default"].objectOf(_propTypes["default"].func),
  ArrayFieldTemplate: _propTypes["default"].func,
  ObjectFieldTemplate: _propTypes["default"].func,
  FieldTemplate: _propTypes["default"].func,
  ErrorList: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onError: _propTypes["default"].func,
  showErrorList: _propTypes["default"].bool,
  onSubmit: _propTypes["default"].func,
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  tagName: _propTypes["default"].string,
  name: _propTypes["default"].string,
  method: _propTypes["default"].string,
  target: _propTypes["default"].string,
  action: _propTypes["default"].string,
  autocomplete: _propTypes["default"].string,
  enctype: _propTypes["default"].string,
  acceptcharset: _propTypes["default"].string,
  noValidate: _propTypes["default"].bool,
  noHtml5Validate: _propTypes["default"].bool,
  liveValidate: _propTypes["default"].bool,
  validate: _propTypes["default"].func,
  transformErrors: _propTypes["default"].func,
  safeRenderCompletion: _propTypes["default"].bool,
  formContext: _propTypes["default"].object,
  customFormats: _propTypes["default"].object,
  additionalMetaSchemas: _propTypes["default"].arrayOf(_propTypes["default"].object),
  omitExtraData: _propTypes["default"].bool
};

var rawFormPropTypes = _objectSpread(_objectSpread({}, reactJsonSchemaFormPropTypes), {}, {
  customSchema: _propTypes["default"].object,
  widgets: _propTypes["default"].object,
  fields: _propTypes["default"].object,
  className: _propTypes["default"].string,
  showErrorList: _propTypes["default"].bool,
  preview: _propTypes["default"].bool
});

exports.rawFormPropTypes = rawFormPropTypes;
var rawFormDefaultPropTypes = {
  customSchema: {},
  widgets: {},
  fields: {},
  className: '',
  showErrorList: undefined,
  preview: false
};
exports.rawFormDefaultPropTypes = rawFormDefaultPropTypes;

var formGeneratorPropTypes = _objectSpread(_objectSpread({}, rawFormPropTypes), {}, {
  shouldShowPreview: _propTypes["default"].bool,
  submitLabel: _propTypes["default"].string,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(Object.values(constants.formGeneratorThemes))
});

exports.formGeneratorPropTypes = formGeneratorPropTypes;
var formGeneratorDefaultPropTypes = {
  shouldShowPreview: true,
  className: '',
  formContext: {},
  submitLabel: 'ارسال',
  theme: constants.formGeneratorThemes.NO_THEME
};
exports.formGeneratorDefaultPropTypes = formGeneratorDefaultPropTypes;