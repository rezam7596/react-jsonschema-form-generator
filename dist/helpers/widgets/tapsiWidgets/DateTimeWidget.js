"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DateTime = _interopRequireDefault(require("tapsi-components/DateTime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function DateTimeWidget(props) {
  var title = props.schema.title,
      onChange = props.onChange,
      value = props.value,
      required = props.required,
      readonly = props.readonly,
      disabled = props.disabled,
      autofocus = props.autofocus,
      rawErrors = props.rawErrors,
      placeholder = props.placeholder,
      timePickerEnabled = props.timePickerEnabled;
  return /*#__PURE__*/_react["default"].createElement(_DateTime["default"], {
    title: title,
    onChange: onChange,
    value: value,
    onClear: function onClear() {
      onChange('');
    },
    required: required,
    readonly: readonly,
    disabled: disabled,
    autoFocus: autofocus,
    error: Boolean(rawErrors && rawErrors.length),
    placeholder: placeholder,
    timePickerEnabled: timePickerEnabled,
    removeDateEnabled: true,
    theme: "theme-2"
  });
}

DateTimeWidget.propTypes = {
  value: _propTypes["default"].number.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  schema: _propTypes["default"].shape({
    title: _propTypes["default"].string
  }).isRequired,
  required: _propTypes["default"].bool.isRequired,
  readonly: _propTypes["default"].bool.isRequired,
  disabled: _propTypes["default"].bool.isRequired,
  autofocus: _propTypes["default"].bool.isRequired,
  placeholder: _propTypes["default"].string.isRequired,
  rawErrors: _propTypes["default"].array.isRequired,
  timePickerEnabled: _propTypes["default"].bool.isRequired
};
DateTimeWidget.defaultPropTypes = {
  timePickerEnabled: true
};
var _default = DateTimeWidget;
exports["default"] = _default;