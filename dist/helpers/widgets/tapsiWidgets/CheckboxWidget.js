"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tapsiComponents = require("tapsi-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CheckboxWidget(_ref) {
  var value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      _onChange = _ref.onChange,
      disabled = _ref.disabled;
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: id
  }, /*#__PURE__*/_react["default"].createElement(_tapsiComponents.CheckBox, {
    onChange: function onChange(e) {
      return _onChange(e.target.checked);
    },
    checked: value,
    disabled: disabled,
    label: label
  }));
}

CheckboxWidget.propTypes = {
  onChange: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].bool.isRequired,
  label: _propTypes["default"].string.isRequired,
  id: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool.isRequired
};
var _default = CheckboxWidget;
exports["default"] = _default;