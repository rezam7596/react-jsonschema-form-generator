"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CheckboxWidget = _interopRequireDefault(require("./CheckboxWidget"));

var _DateTimeWidget = _interopRequireDefault(require("./DateTimeWidget"));

var _DateWidget = _interopRequireDefault(require("./DateWidget"));

var _TextWidget = _interopRequireDefault(require("./TextWidget"));

var _TextareaWidget = _interopRequireDefault(require("./TextareaWidget"));

var _SelectWidget = _interopRequireDefault(require("./SelectWidget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  CheckboxWidget: _CheckboxWidget["default"],
  DateTimeWidget: _DateTimeWidget["default"],
  DateWidget: _DateWidget["default"],
  SelectWidget: _SelectWidget["default"],
  TextareaWidget: _TextareaWidget["default"],
  TextWidget: _TextWidget["default"]
};
exports["default"] = _default;