"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PreviewWidget = _interopRequireDefault(require("./PreviewWidget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TextWidget(_ref) {
  var id = _ref.id,
      schema = _ref.schema,
      value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement(_PreviewWidget["default"], {
    id: id,
    title: schema.title,
    value: value === undefined || value === null ? '' : value
  });
}

TextWidget.propTypes = {
  id: _propTypes["default"].string.isRequired,
  schema: _propTypes["default"].shape({
    title: _propTypes["default"].string
  }).isRequired,
  value: _propTypes["default"].string.isRequired
};
var _default = TextWidget;
exports["default"] = _default;