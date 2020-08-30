"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rawJsonToJsonSchemaAndUiSchema;

var _deepmerge = _interopRequireDefault(require("deepmerge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var specialUiSchemaAttributes = ['classNames'];
var customTypesUiFields = {
  action: {
    type: 'string',
    uiSchema: 'ActionField'
  },
  resource: {
    type: 'string',
    uiSchema: 'ResourceField'
  }
};

var customizeSchema = function customizeSchema(_ref, _ref2) {
  var jsonSchema = _extends({}, _ref);

  var uiSchema = _extends({}, _ref2);

  if (jsonSchema.type === 'string' && jsonSchema.format === 'big-text') {
    uiSchema['ui:widget'] = 'textarea';
  } else if (jsonSchema.type === 'number' && ['date', 'date-time'].includes(jsonSchema.format)) {
    uiSchema['ui:widget'] = jsonSchema.format === 'date' ? 'DateWidget' : 'DateTimeWidget';
  } else if (jsonSchema.type === 'array' && jsonSchema.uniqueItems && (jsonSchema.items || {}).enumType !== undefined) {
    uiSchema['ui:widget'] = 'SelectWidget';
    delete uiSchema.items['ui:widget'];
  } else if (jsonSchema.enumType !== undefined) {
    jsonSchema["enum"] = jsonSchema["enum"] || [];
    uiSchema['ui:widget'] = 'SelectWidget';
  } else if (customTypesUiFields[jsonSchema.type]) {
    uiSchema['ui:field'] = customTypesUiFields[jsonSchema.type].uiSchema;
    jsonSchema.type = customTypesUiFields[jsonSchema.type].type;
  }

  return [jsonSchema, uiSchema];
};

var rawUiToUiSchema = function rawUiToUiSchema(rawUi) {
  var uiSchema = {};

  for (var element in rawUi) {
    if (Object.prototype.hasOwnProperty.call(rawUi, element)) {
      if (specialUiSchemaAttributes.includes(element)) {
        uiSchema[element] = rawUi[element];
      } else {
        uiSchema["ui:".concat(element)] = rawUi[element];
      }
    }
  }

  return uiSchema;
};

function rawJsonToJsonSchemaAndUiSchema(rawJson) {
  var jsonSchema = {};
  var uiSchema = {};
  Object.keys(rawJson).forEach(function (key) {
    if (['properties', 'dependencies'].includes(key) && !Array.isArray(rawJson[key])) {
      jsonSchema[key] = {};
      Object.keys(rawJson[key]).forEach(function (innerKey) {
        var _rawJsonToJsonSchemaA = rawJsonToJsonSchemaAndUiSchema(rawJson[key][innerKey]),
            _rawJsonToJsonSchemaA2 = _slicedToArray(_rawJsonToJsonSchemaA, 2),
            innerJsonSchema = _rawJsonToJsonSchemaA2[0],
            innerUiSchema = _rawJsonToJsonSchemaA2[1];

        jsonSchema[key][innerKey] = innerJsonSchema;

        if (key === 'dependencies') {
          uiSchema = (0, _deepmerge["default"])(uiSchema, innerUiSchema);
        } else {
          uiSchema[innerKey] = (0, _deepmerge["default"])(uiSchema[innerKey] || {}, innerUiSchema);
        }
      });
    } else if (['items', 'additionalProperties'].includes(key)) {
      var _rawJsonToJsonSchemaA3 = rawJsonToJsonSchemaAndUiSchema(rawJson[key]),
          _rawJsonToJsonSchemaA4 = _slicedToArray(_rawJsonToJsonSchemaA3, 2),
          innerJsonSchema = _rawJsonToJsonSchemaA4[0],
          innerUiSchema = _rawJsonToJsonSchemaA4[1];

      jsonSchema[key] = innerJsonSchema;
      uiSchema[key] = innerUiSchema;
    } else if (['anyOf', 'oneOf'].includes(key)) {
      var innerJsonSchemas = [];
      var innerUiSchemas = [];
      rawJson[key].map(function (item) {
        return rawJsonToJsonSchemaAndUiSchema(item);
      }).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            innerJsonSchema = _ref4[0],
            innerUiSchema = _ref4[1];

        innerJsonSchemas.push(innerJsonSchema);
        innerUiSchemas.push(innerUiSchema);
      });
      jsonSchema[key] = innerJsonSchemas;
      uiSchema = _deepmerge["default"].all([uiSchema].concat(innerUiSchemas));
    } else if (key === 'ui') {
      uiSchema = (0, _deepmerge["default"])(uiSchema, rawUiToUiSchema(rawJson[key]));
    } else if (!(key.includes('ui:') || specialUiSchemaAttributes.includes(key))) {
      jsonSchema[key] = JSON.parse(JSON.stringify(rawJson[key]));
    } else {
      uiSchema[key] = JSON.parse(JSON.stringify(rawJson[key]));
    }

    var _customizeSchema = customizeSchema(jsonSchema, uiSchema);

    var _customizeSchema2 = _slicedToArray(_customizeSchema, 2);

    jsonSchema = _customizeSchema2[0];
    uiSchema = _customizeSchema2[1];
  });
  return [jsonSchema, uiSchema];
}