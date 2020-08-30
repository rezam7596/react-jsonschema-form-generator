"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("isomorphic-style-loader/lib/withStyles"));

var _ArrayFieldTemplate = _interopRequireDefault(require("./ArrayFieldTemplate.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ArrayFieldTemplate(_ref) {
  var canAdd = _ref.canAdd,
      onAddClick = _ref.onAddClick,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      items = _ref.items;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "array-field-template"
  }, !disabled && !readonly && canAdd && /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "array-field-template-add-button",
    onClick: onAddClick
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-plus"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "array-field-template-items"
  }, items.map(function (_ref2) {
    var children = _ref2.children,
        hasMoveDown = _ref2.hasMoveDown,
        hasRemove = _ref2.hasRemove,
        onDropIndexClick = _ref2.onDropIndexClick,
        onReorderClick = _ref2.onReorderClick,
        index = _ref2.index,
        key = _ref2.key;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "array-field-template-item",
      key: key
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "array-field-template-item-children"
    }, children), /*#__PURE__*/_react["default"].createElement("div", {
      className: "array-field-template-item-buttons"
    }, !disabled && !readonly && hasMoveDown && /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: onReorderClick(index, index + 1)
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fa fa-angle-double-down"
    })), !disabled && !readonly && hasRemove && /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: onDropIndexClick(index)
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fa fa-trash"
    }))));
  })));
}

ArrayFieldTemplate.propTypes = {
  canAdd: _propTypes["default"].bool.isRequired,
  onAddClick: _propTypes["default"].func.isRequired,
  disabled: _propTypes["default"].bool.isRequired,
  readonly: _propTypes["default"].bool.isRequired,
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    children: _propTypes["default"].node,
    hasMoveDown: _propTypes["default"].bool,
    hasRemove: _propTypes["default"].bool,
    onDropIndexClick: _propTypes["default"].func,
    onReorderClick: _propTypes["default"].func,
    index: _propTypes["default"].number,
    key: _propTypes["default"].string
  })).isRequired
};

var _default = (0, _withStyles["default"])(_ArrayFieldTemplate["default"])(ArrayFieldTemplate);

exports["default"] = _default;