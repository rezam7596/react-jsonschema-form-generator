"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tapsiComponents = require("tapsi-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/jsx-no-duplicate-props */
function TextWidget(_ref) {
  var id = _ref.id,
      schema = _ref.schema,
      value = _ref.value,
      placeholder = _ref.placeholder,
      rawErrors = _ref.rawErrors,
      required = _ref.required,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      autofocus = _ref.autofocus,
      _onChange = _ref.onChange,
      options = _ref.options,
      onClick = _ref.onClick,
      multiline = _ref.multiline,
      select = _ref.select,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_tapsiComponents.TextField, {
    inputProps: {
      style: {
        height: 'auto'
      }
    },
    numeric: schema.type === 'number',
    id: id,
    title: schema.title,
    placeholder: placeholder,
    value: value === undefined || value === null ? '' : value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    error: Boolean(rawErrors && rawErrors.length),
    required: required,
    disabled: disabled,
    InputProps: {
      onClick: onClick,
      readOnly: readonly
    },
    autoFocus: autofocus,
    helperText: options.help,
    multiline: multiline,
    rows: 3,
    select: select,
    theme: "theme-2"
  }, children);
}

TextWidget.propTypes = {
  id: _propTypes["default"].string.isRequired,
  schema: _propTypes["default"].shape({
    type: _propTypes["default"].string,
    title: _propTypes["default"].string
  }).isRequired,
  value: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string.isRequired,
  rawErrors: _propTypes["default"].array.isRequired,
  required: _propTypes["default"].bool.isRequired,
  disabled: _propTypes["default"].bool.isRequired,
  readonly: _propTypes["default"].bool.isRequired,
  autofocus: _propTypes["default"].bool.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  options: _propTypes["default"].shape({
    help: _propTypes["default"].string,
    enumOptions: _propTypes["default"].array
  }).isRequired,
  onClick: _propTypes["default"].func,
  multiline: _propTypes["default"].bool,
  select: _propTypes["default"].bool,
  children: _propTypes["default"].node
};
TextWidget.defaultProps = {
  onClick: null,
  multiline: false,
  select: false,
  children: null
};
var _default = TextWidget;
exports["default"] = _default;