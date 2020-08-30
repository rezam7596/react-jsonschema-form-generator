"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tapsiComponents = require("tapsi-components");

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setEnumInCustomSchema = function setEnumInCustomSchema(customSchema, url, data) {
  if (customSchema.url && customSchema.url === url) {
    return _objectSpread(_objectSpread({}, customSchema), data);
  }

  if (customSchema.type === 'object') {
    return _objectSpread(_objectSpread({}, customSchema), {}, {
      properties: Object.keys(customSchema.properties).map(function (key) {
        return _defineProperty({}, key, setEnumInCustomSchema(customSchema.properties[key], url, data));
      }).reduce(function (properties, property) {
        return _objectSpread(_objectSpread({}, properties), property);
      }, {})
    });
  }

  if (customSchema.type === 'array') {
    return _objectSpread(_objectSpread({}, customSchema), {}, {
      items: setEnumInCustomSchema(customSchema.items, url, data)
    });
  }

  return customSchema;
};

function SelectWidget(_ref2) {
  var schema = _ref2.schema,
      value = _ref2.value,
      rawErrors = _ref2.rawErrors,
      required = _ref2.required,
      disabled = _ref2.disabled,
      readonly = _ref2.readonly,
      autofocus = _ref2.autofocus,
      _onChange = _ref2.onChange,
      _ref2$options = _ref2.options,
      help = _ref2$options.help,
      enumOptions = _ref2$options.enumOptions,
      _ref2$formContext = _ref2.formContext,
      setCustomSchema = _ref2$formContext.setCustomSchema,
      fetchApi = _ref2$formContext.fetchApi,
      fetchApiConfig = _ref2$formContext.fetchApiConfig;
  var url = schema.url || (schema.items || {}).url;
  var enumType = schema.enumType || (schema.items || {}).enumType || 'OFFLINE';
  var enumKey = schema.enumKey || (schema.items || {}).enumKey;
  var enumNamesKey = schema.enumNamesKey || (schema.items || {}).enumNamesKey;
  var searchMode = schema.searchMode || (schema.items || {}).searchMode || 'OFFLINE';

  var lastSearchApiCallAbortController = _react["default"].useRef(null);

  var mergeSchemaWithServerData = function mergeSchemaWithServerData(serverData) {
    if (enumType === 'ONLINE_OBJECT') {
      var _enum = Object.keys(serverData);

      var enumNames = Object.values(serverData);
      setCustomSchema(function (previousCustomSchema) {
        return setEnumInCustomSchema(previousCustomSchema, url, {
          "enum": _enum,
          enumNames: enumNames
        });
      });
    } else if (enumType === 'ONLINE_ARRAY_OF_OBJECTS') {
      var _enum2 = serverData.map(function (option) {
        return (0, _utils.deepGetBfs)(option, enumKey);
      });

      var _enumNames = serverData.map(function (option) {
        return (0, _utils.deepGetBfs)(option, enumNamesKey);
      });

      setCustomSchema(function (previousCustomSchema) {
        return setEnumInCustomSchema(previousCustomSchema, url, {
          "enum": _enum2,
          enumNames: _enumNames
        });
      });
    }
  };

  var searchOptions = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(inputValue) {
      var currentSearchApiCallAbortController, serverSearchedData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(searchMode === 'ONLINE')) {
                _context.next = 14;
                break;
              }

              _context.prev = 1;

              if (lastSearchApiCallAbortController.current) {
                lastSearchApiCallAbortController.current.abort();
              }

              currentSearchApiCallAbortController = new AbortController();
              lastSearchApiCallAbortController.current = currentSearchApiCallAbortController;
              _context.next = 7;
              return fetchApi("".concat(url, "?q=").concat(inputValue), _objectSpread(_objectSpread({
                method: 'GET'
              }, fetchApiConfig === null || fetchApiConfig === void 0 ? void 0 : fetchApiConfig.GET()), {}, {
                signal: lastSearchApiCallAbortController.signal
              }));

            case 7:
              serverSearchedData = _context.sent;
              mergeSchemaWithServerData(serverSearchedData);
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              (0, _utils.notifyError)(_context.t0.message || _context.t0.code || 'خطا در  جستجو گزینه‌های select');

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function searchOptions(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  _react["default"].useEffect(function () {
    _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var serverData;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!enumType.includes('ONLINE')) {
                _context2.next = 11;
                break;
              }

              _context2.prev = 1;
              _context2.next = 4;
              return fetchApi(url, _objectSpread({
                method: 'GET'
              }, fetchApiConfig === null || fetchApiConfig === void 0 ? void 0 : fetchApiConfig.GET()));

            case 4:
              serverData = _context2.sent;
              mergeSchemaWithServerData(serverData);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              (0, _utils.notifyError)(_context2.t0.message || _context2.t0.code || 'خطا در دریافت گزینه‌های select');

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }))();
  }, []);

  return /*#__PURE__*/_react["default"].createElement(_tapsiComponents.AutoComplete, {
    value: value,
    onChange: function onChange(event, newValue) {
      return _onChange(newValue);
    },
    onInputChange: function onInputChange(event, newValue) {
      return searchOptions(newValue);
    },
    disabled: disabled,
    multiple: schema.uniqueItems && schema.type === 'array',
    title: schema.title,
    error: Boolean(rawErrors && rawErrors.length),
    required: required,
    readOnly: readonly,
    autoFocus: autofocus,
    helperText: help,
    theme: "theme-2"
  }, enumOptions.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  }));
}

SelectWidget.propTypes = {
  schema: _propTypes["default"].shape({
    type: _propTypes["default"].string,
    title: _propTypes["default"].string,
    uniqueItems: _propTypes["default"].bool,
    enumType: _propTypes["default"].oneOf(['OFFLINE', 'ONLINE_OBJECT', 'ONLINE_ARRAY_OF_OBJECTS']),
    "enum": _propTypes["default"].array,
    enumNames: _propTypes["default"].array,
    enumKey: _propTypes["default"].string,
    enumNamesKey: _propTypes["default"].string,
    searchMode: _propTypes["default"].string,
    url: _propTypes["default"].string,
    items: _propTypes["default"].shape({
      enumType: _propTypes["default"].oneOf(['OFFLINE', 'ONLINE_OBJECT', 'ONLINE_ARRAY_OF_OBJECTS']),
      "enum": _propTypes["default"].array,
      enumNames: _propTypes["default"].array,
      enumKey: _propTypes["default"].string,
      enumNamesKey: _propTypes["default"].string,
      url: _propTypes["default"].string
    })
  }).isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]).isRequired,
  rawErrors: _propTypes["default"].array.isRequired,
  required: _propTypes["default"].bool.isRequired,
  disabled: _propTypes["default"].bool.isRequired,
  readonly: _propTypes["default"].bool.isRequired,
  autofocus: _propTypes["default"].bool.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  options: _propTypes["default"].shape({
    help: _propTypes["default"].string,
    enumOptions: _propTypes["default"].array
  }).isRequired,
  formContext: _propTypes["default"].shape({
    setCustomSchema: _propTypes["default"].func,
    fetchApi: _propTypes["default"].func,
    fetchApiConfig: _propTypes["default"].object
  }).isRequired
};
var _default = SelectWidget;
exports["default"] = _default;