"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("isomorphic-style-loader/lib/withStyles"));

var _classnames = _interopRequireDefault(require("classnames"));

var _core = require("@material-ui/core");

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _FieldTemplate = _interopRequireDefault(require("./FieldTemplate.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var primitiveTypes = ['boolean', 'string', 'number', 'integer'];

var isMultipleSelect = function isMultipleSelect(schema) {
  return schema.type === 'array' && schema.uniqueItems && (schema.items || {})["enum"];
};

var hasTitleAlready = function hasTitleAlready(schema) {
  return primitiveTypes.includes(schema.type) || isMultipleSelect(schema);
};

var isExpandable = function isExpandable() {
  var uiOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return uiOptions.expandable;
};

var getWrappedElement = function getWrappedElement() {
  var uiOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var label = arguments.length > 1 ? arguments[1] : undefined;
  return function (element) {
    if (isExpandable(uiOptions)) {
      return /*#__PURE__*/_react["default"].createElement(_core.ExpansionPanel, {
        square: true
      }, /*#__PURE__*/_react["default"].createElement(_core.ExpansionPanelSummary, {
        expandIcon: /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "rjf-expandable-title"
      }, label)), /*#__PURE__*/_react["default"].createElement(_core.ExpansionPanelDetails, null, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: '100%'
        }
      }, element)));
    }

    if (uiOptions.wrapped) {
      return /*#__PURE__*/_react["default"].createElement(_core.Card, null, /*#__PURE__*/_react["default"].createElement(_core.CardContent, null, element));
    }

    return element;
  };
};

function FieldTemplate(_ref) {
  var id = _ref.id,
      classNames = _ref.classNames,
      label = _ref.label,
      description = _ref.description,
      errors = _ref.errors,
      children = _ref.children,
      schema = _ref.schema,
      uiSchema = _ref.uiSchema;
  var filteredClassNames = classNames.split(' ').filter(function (className) {
    return !['form-group', 'field'].includes(className);
  }).join(' ');
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: id,
    className: (0, _classnames["default"])('rjf-field', filteredClassNames)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])({
      'primitive-fields-max-width': primitiveTypes.includes(schema.type) || isMultipleSelect(schema)
    })
  }, getWrappedElement(uiSchema['ui:options'], label)( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, label && !hasTitleAlready(schema) && !isExpandable(uiSchema['ui:options']) && /*#__PURE__*/_react["default"].createElement("div", {
    className: "rjf-title"
  }, label), description, children))), errors);
}

FieldTemplate.propTypes = {
  id: _propTypes["default"].string.isRequired,
  classNames: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string.isRequired,
  description: _propTypes["default"].node.isRequired,
  children: _propTypes["default"].node.isRequired,
  errors: _propTypes["default"].node.isRequired,
  schema: _propTypes["default"].shape({
    type: _propTypes["default"].string
  }).isRequired,
  uiSchema: _propTypes["default"].shape({
    'ui:options': _propTypes["default"].shape({
      expandable: _propTypes["default"].bool,
      wrapped: _propTypes["default"].bool
    })
  }).isRequired
};

var _default = (0, _withStyles["default"])(_FieldTemplate["default"])(FieldTemplate);

exports["default"] = _default;