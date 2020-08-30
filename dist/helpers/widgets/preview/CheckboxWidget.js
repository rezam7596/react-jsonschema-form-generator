"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PreviewWidget = _interopRequireDefault(require("./PreviewWidget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CheckboxWidget(_ref) {
  var value = _ref.value,
      label = _ref.label,
      id = _ref.id;
  return /*#__PURE__*/_react["default"].createElement(_PreviewWidget["default"], {
    id: id,
    title: label,
    value: value ? 'بله' : 'خیر'
  });
}

CheckboxWidget.propTypes = {
  value: _propTypes["default"].bool.isRequired,
  label: _propTypes["default"].string.isRequired,
  id: _propTypes["default"].string.isRequired
};
var _default = CheckboxWidget;
exports["default"] = _default;