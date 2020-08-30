"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeParameters = mergeParameters;
exports.getQueriedUrl = getQueriedUrl;
exports.notifyError = notifyError;
exports.convertEnglishNumberToPersianNumber = exports.getCalculatedUrlBfs = exports.deepGetBfs = exports.getUrlParameters = exports.getUrl = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function mergeParameters(paramObj) {
  return Object.entries(paramObj).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];

    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(JSON.stringify(paramObj[key])));
  }).join('&');
}

function getQueriedUrl(baseUrl, parameters) {
  return baseUrl.includes('?') ? "".concat(baseUrl, "&").concat(mergeParameters(parameters)) : "".concat(baseUrl, "?").concat(mergeParameters(parameters));
}

var getUrl = function getUrl(templateUrl, parameters) {
  var resultUrl = templateUrl;

  while (/:(\w+)/.test(resultUrl)) {
    var _$exec = /:(\w+)/.exec(resultUrl),
        _$exec2 = _slicedToArray(_$exec, 2),
        parameter = _$exec2[0],
        parameterName = _$exec2[1];

    resultUrl = resultUrl.replace(parameter, parameters[parameterName]);
  }

  return resultUrl;
};

exports.getUrl = getUrl;

var getUrlParameters = function getUrlParameters(templateUrl) {
  var parameters = _toConsumableArray(templateUrl.matchAll(/:(\w+)/g));

  return parameters.map(function (parameter) {
    return parameter[1];
  });
};

exports.getUrlParameters = getUrlParameters;

function deepGetBfsInternalCalculation(key, queue) {
  if (queue.length === 0) return undefined;
  var currentObj = queue.shift();

  for (var _i2 = 0, _Object$entries = Object.entries(currentObj); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        currentKey = _Object$entries$_i[0],
        currentValue = _Object$entries$_i[1];

    if (currentKey === key) {
      return currentValue;
    }

    if (_typeof(currentValue) === 'object') {
      queue.push(currentValue);
    }
  }

  return deepGetBfsInternalCalculation(key, queue);
}

var deepGetBfs = function deepGetBfs(obj, key) {
  var queue = [_objectSpread({}, obj)];
  return deepGetBfsInternalCalculation(key, queue);
};

exports.deepGetBfs = deepGetBfs;

var getCalculatedUrlBfs = function getCalculatedUrlBfs(templateUrl, data) {
  var parameterKeys = getUrlParameters(templateUrl);
  var parameters = {};
  parameterKeys.forEach(function (key) {
    parameters[key] = deepGetBfs(data, key);
  });
  return parameters;
};

exports.getCalculatedUrlBfs = getCalculatedUrlBfs;
var defaultErrorMessage = 'خطای ناشناخته';

function notifyError(message) {
  var defaultMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultErrorMessage;

  if (!process.env.BROWSER || (typeof toastr === "undefined" ? "undefined" : _typeof(toastr)) !== 'object') {
    return;
  }

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: 'toast-top-center',
    preventDuplicates: true,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '10000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'slideDown',
    hideMethod: 'slideUp'
  };
  toastr.error(message || defaultMessage, 'خطا');
}

var convertEnglishNumberToPersianNumber = function convertEnglishNumberToPersianNumber(englishText) {
  var persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  if (typeof englishText !== 'string') {
    return englishText;
  }

  var resultStr = englishText;

  for (var i = 0; i < 10; i += 1) {
    resultStr = resultStr.replace(RegExp(i, 'g'), persianNumbers[i]);
  }

  return resultStr;
};

exports.convertEnglishNumberToPersianNumber = convertEnglishNumberToPersianNumber;