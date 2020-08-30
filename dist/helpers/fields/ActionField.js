"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _CallToAction = _interopRequireDefault(require("@material-ui/icons/CallToAction"));

var _utils = require("../../utils");

var _Button = _interopRequireDefault(require("tapsi-components/Button"));

var _constants = require("tapsi-components/Button/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ActionField(_ref) {
  var schema = _ref.schema,
      _ref$formContext = _ref.formContext,
      formData = _ref$formContext.formData,
      fetchApi = _ref$formContext.fetchApi,
      fetchApiConfig = _ref$formContext.fetchApiConfig;

  var execAction = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(schema.actionType === 'api-call')) {
                _context.next = 9;
                break;
              }

              _context.prev = 1;
              _context.next = 4;
              return fetchApi("".concat((0, _utils.getUrl)(schema.url, (0, _utils.getCalculatedUrlBfs)(schema.url, formData))), _objectSpread({
                method: schema.method
              }, fetchApiConfig && fetchApiConfig[schema.method] ? fetchApiConfig[schema.method]() : {}));

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](1);
              (0, _utils.notifyError)(_context.t0.message || _context.t0.code || 'خطا در اجرای اکشن');

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 6]]);
    }));

    return function execAction() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    startIcon: /*#__PURE__*/_react["default"].createElement(_CallToAction["default"], null),
    theme: _constants.buttonThemes.THEME_3,
    onClick: execAction
  }, schema.title);
}

ActionField.propTypes = {
  schema: _propTypes["default"].shape({
    type: _propTypes["default"].string,
    title: _propTypes["default"].string,
    actionType: _propTypes["default"].string,
    url: _propTypes["default"].string,
    method: _propTypes["default"].string
  }).isRequired,
  formContext: _propTypes["default"].object.isRequired
};
var _default = ActionField;
exports["default"] = _default;