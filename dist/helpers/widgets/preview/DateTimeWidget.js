"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _momentJalaali = _interopRequireDefault(require("moment-jalaali"));

var _utils = require("../../../utils");

var _PreviewWidget = _interopRequireDefault(require("./PreviewWidget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_momentJalaali["default"].loadPersian({
  usePersianDigits: false,
  dialect: 'persian-modern'
});

function DateTimeWidget(_ref) {
  var id = _ref.id,
      schema = _ref.schema,
      value = _ref.value,
      timePicker = _ref.timePicker;
  return /*#__PURE__*/_react["default"].createElement(_PreviewWidget["default"], {
    id: id,
    title: schema.title,
    value: value && (0, _utils.convertEnglishNumberToPersianNumber)((0, _momentJalaali["default"])(value).format(timePicker ? 'HH:mm jYYYY/jM/jD' : 'jYYYY/jM/jD'))
  });
}

DateTimeWidget.propTypes = {
  id: _propTypes["default"].string.isRequired,
  schema: _propTypes["default"].shape({
    title: _propTypes["default"].string
  }).isRequired,
  value: _propTypes["default"].number.isRequired,
  timePicker: _propTypes["default"].bool
};
DateTimeWidget.defaultProps = {
  timePicker: true
};
var _default = DateTimeWidget;
exports["default"] = _default;