"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.removeEmptyObjectsAndUndefined = void 0;

var _react = _interopRequireDefault(require("react"));

var _withStyles = _interopRequireDefault(require("isomorphic-style-loader/lib/withStyles"));

var _reactJsonschemaForm = _interopRequireDefault(require("react-jsonschema-form"));

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _gridSystemClasses = _interopRequireDefault(require("./helpers/gridSystemClasses.scss"));

var _rawJsonToJsonSchemaAndUiSchema = _interopRequireDefault(require("./helpers/rawJsonToJsonSchemaAndUiSchema"));

var _FieldTemplate = _interopRequireDefault(require("./helpers/templates/FieldTemplate"));

var _ArrayFieldTemplate = _interopRequireDefault(require("./helpers/templates/ArrayFieldTemplate"));

var _ObjectFieldTemplate = _interopRequireDefault(require("./helpers/templates/ObjectFieldTemplate"));

var _fields = _interopRequireDefault(require("./helpers/fields"));

var _tapsiWidgets = _interopRequireDefault(require("./helpers/widgets/tapsiWidgets"));

var _preview = _interopRequireDefault(require("./helpers/widgets/preview"));

var _propTypes = require("./propTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var removeEmptyObjectsAndUndefined = function removeEmptyObjectsAndUndefined(_ref) {
  var obj = _extends({}, _ref);

  Object.keys(obj).forEach(function (key) {
    if (_typeof(obj[key]) === 'object' && !Array.isArray(obj[key])) {
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

exports.removeEmptyObjectsAndUndefined = removeEmptyObjectsAndUndefined;

function RawForm(_ref2) {
  var customSchema = _ref2.customSchema,
      widgets = _ref2.widgets,
      fields = _ref2.fields,
      className = _ref2.className,
      showErrorList = _ref2.showErrorList,
      preview = _ref2.preview,
      _onSubmit = _ref2.onSubmit,
      restProps = _objectWithoutProperties(_ref2, ["customSchema", "widgets", "fields", "className", "showErrorList", "preview", "onSubmit"]);

  var _rawJsonToJsonSchemaA = (0, _rawJsonToJsonSchemaAndUiSchema["default"])(customSchema),
      _rawJsonToJsonSchemaA2 = _slicedToArray(_rawJsonToJsonSchemaA, 2),
      schema = _rawJsonToJsonSchemaA2[0],
      uiSchema = _rawJsonToJsonSchemaA2[1];

  var computedWidgets = (0, _deepmerge["default"])(preview ? _preview["default"] : _tapsiWidgets["default"], widgets);
  var computedFields = (0, _deepmerge["default"])(preview ? {
    DescriptionField: function DescriptionField() {
      return null;
    }
  } : {}, _objectSpread(_objectSpread({}, _fields["default"]), fields));
  var computedShowErrorList = showErrorList === undefined ? !preview : showErrorList;
  window.deepMerge = _deepmerge["default"];
  return /*#__PURE__*/_react["default"].createElement(_reactJsonschemaForm["default"], _extends({
    className: "rjf-raw-form ".concat(className),
    schema: schema,
    uiSchema: uiSchema,
    FieldTemplate: _FieldTemplate["default"],
    ArrayFieldTemplate: _ArrayFieldTemplate["default"],
    ObjectFieldTemplate: _ObjectFieldTemplate["default"],
    widgets: computedWidgets,
    fields: computedFields,
    showErrorList: computedShowErrorList,
    noHtml5Validate: true,
    onSubmit: function onSubmit(data) {
      return _onSubmit(_objectSpread(_objectSpread({}, data), {}, {
        formData: removeEmptyObjectsAndUndefined(data.formData)
      }));
    }
  }, preview ? {
    disabled: true
  } : {}, restProps));
}

RawForm.propTypes = _propTypes.rawFormPropTypes;
RawForm.defaultProps = _propTypes.rawFormDefaultPropTypes;

var _default = (0, _withStyles["default"])(_gridSystemClasses["default"])(RawForm);

exports["default"] = _default;