"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ResourceField(_ref) {
  var schema = _ref.schema,
      formContext = _ref.formContext;
  var _formContext$formData = formContext.formData,
      formData = _formContext$formData === void 0 ? {} : _formContext$formData,
      baseFrontFormsUrl = formContext.baseFrontFormsUrl;

  var urlParameters = _defineProperty({}, schema.join.to, (0, _utils.deepGetBfs)(formData, schema.join.from) || '');

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "resource-field"
  }, /*#__PURE__*/_react["default"].createElement("div", null, schema.title), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: (0, _utils.getQueriedUrl)("".concat(baseFrontFormsUrl, "/").concat(schema.key), urlParameters)
  }, "\u0631\u0641\u062A\u0646 \u0628\u0647 \u0628\u062E\u0634 ", schema.title)));
}

ResourceField.propTypes = {
  schema: _propTypes["default"].shape({
    title: _propTypes["default"].string,
    key: _propTypes["default"].string,
    join: _propTypes["default"].shape({
      from: _propTypes["default"].string,
      to: _propTypes["default"].string
    })
  }).isRequired,
  formContext: _propTypes["default"].shape({
    formData: _propTypes["default"].object,
    baseFrontFormsUrl: _propTypes["default"].string
  }).isRequired
};
var _default = ResourceField;
exports["default"] = _default;