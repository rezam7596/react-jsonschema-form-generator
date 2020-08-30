"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("isomorphic-style-loader/lib/withStyles"));

var _ObjectFieldTemplate = _interopRequireDefault(require("./ObjectFieldTemplate.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ObjectFieldTemplate(_ref) {
  var properties = _ref.properties;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "object-field-template"
  }, properties.map(function (element) {
    return element.content;
  }));
}

ObjectFieldTemplate.propTypes = {
  properties: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    content: _propTypes["default"].node
  })).isRequired
};

var _default = (0, _withStyles["default"])(_ObjectFieldTemplate["default"])(ObjectFieldTemplate);

exports["default"] = _default;