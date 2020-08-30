"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _withStyles = _interopRequireDefault(require("isomorphic-style-loader/lib/withStyles"));

var _Modal = _interopRequireDefault(require("@material-ui/core/Modal"));

var _tapsiComponents = require("tapsi-components");

var _constants = require("tapsi-components/dist/Button/constants");

var _propTypes = require("./propTypes");

var _gridSystemClasses = _interopRequireDefault(require("./helpers/gridSystemClasses.scss"));

var _FormGenerator = _interopRequireDefault(require("./FormGenerator.scss"));

var _RawForm = _interopRequireDefault(require("./RawForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function FormGenerator(_ref) {
  var submitLabel = _ref.submitLabel,
      shouldShowPreview = _ref.shouldShowPreview,
      className = _ref.className,
      formContext = _ref.formContext,
      _customSchema = _ref.customSchema,
      _fetchApi = _ref.fetchApi,
      _fetchApiConfig = _ref.fetchApiConfig,
      baseFrontFormsUrl = _ref.baseFrontFormsUrl,
      theme = _ref.theme,
      restProps = _objectWithoutProperties(_ref, ["submitLabel", "shouldShowPreview", "className", "formContext", "customSchema", "fetchApi", "fetchApiConfig", "baseFrontFormsUrl", "theme"]);

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isPreviewModalOpen = _React$useState2[0],
      setIsPreviewModalOpen = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(restProps.formData),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      formData = _React$useState4[0],
      setFormData = _React$useState4[1];

  var _React$useState5 = _react["default"].useState(_customSchema),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      customSchema = _React$useState6[0],
      setCustomSchema = _React$useState6[1];

  var computedFormContext = _objectSpread(_objectSpread({}, restProps.formContext), {}, {
    formData: formData,
    customSchema: customSchema,
    setCustomSchema: setCustomSchema,
    fetchApi: _fetchApi || fetch,
    fetchApiConfig: _fetchApiConfig,
    baseFrontFormsUrl: baseFrontFormsUrl
  });

  var previewModal = /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
    open: isPreviewModalOpen,
    onClose: function onClose() {
      return setIsPreviewModalOpen(false);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-generator-modal"
  }, /*#__PURE__*/_react["default"].createElement(_RawForm["default"], _extends({}, restProps, {
    formContext: computedFormContext,
    customSchema: customSchema,
    formData: formData,
    preview: true
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rjf-buttons"
  }, /*#__PURE__*/_react["default"].createElement(_tapsiComponents.Button, {
    onClick: function onClick() {
      return setIsPreviewModalOpen(false);
    }
  }, "\u0627\u0646\u0635\u0631\u0627\u0641"), /*#__PURE__*/_react["default"].createElement(_tapsiComponents.Button, {
    type: "submit",
    theme: _constants.buttonThemes.THEME_3
  }, "\u062A\u0627\u06CC\u06CC\u062F")))));

  _react["default"].useEffect(function () {
    setFormData(restProps.formData);
  }, [restProps.formData]);

  _react["default"].useEffect(function () {
    setCustomSchema(_customSchema);
  }, [_customSchema]);

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-generator ".concat(className, " ").concat(theme)
  }, /*#__PURE__*/_react["default"].createElement(_RawForm["default"], _extends({}, restProps, {
    formContext: computedFormContext,
    customSchema: customSchema
  }, shouldShowPreview ? {
    formData: formData,
    onChange: function onChange(data) {
      setFormData(data.formData);
    },
    onSubmit: function onSubmit() {
      setIsPreviewModalOpen(true);
    }
  } : {}), /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "rjf-buttons"
  }, restProps.preview ? {
    style: {
      display: 'none'
    }
  } : {}), /*#__PURE__*/_react["default"].createElement(_tapsiComponents.Button, {
    type: "submit",
    theme: _constants.buttonThemes.THEME_3
  }, submitLabel))), shouldShowPreview ? previewModal : null);
}

FormGenerator.propTypes = _propTypes.formGeneratorPropTypes;
FormGenerator.defaultProps = _propTypes.formGeneratorDefaultPropTypes;

var _default = (0, _withStyles["default"])(_FormGenerator["default"], _gridSystemClasses["default"])(FormGenerator);

exports["default"] = _default;