"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("isomorphic-style-loader/lib/withStyles"));

var _PreviewWidget = _interopRequireDefault(require("./PreviewWidget.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function PreviewWidget(_ref) {
  var id = _ref.id,
      title = _ref.title,
      value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    onKeyDown: function onKeyDown(e) {
      return e.stopPropagation();
    },
    className: "preview-widget",
    id: id
  }, /*#__PURE__*/_react["default"].createElement("h3", null, title, ":"), /*#__PURE__*/_react["default"].createElement("p", null, value === undefined || value === null ? '' : value));
}

PreviewWidget.propTypes = {
  id: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].string.isRequired
};

var _default = (0, _withStyles["default"])(_PreviewWidget["default"])(PreviewWidget);

exports["default"] = _default;