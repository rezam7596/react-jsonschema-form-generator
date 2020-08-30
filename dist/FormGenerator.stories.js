"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Story0 = exports.Story7 = exports.Story6 = exports.Story5 = exports.Story4 = exports.Story3 = exports.Story2 = exports.Story1 = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _FormGenerator = _interopRequireDefault(require("./FormGenerator"));

var _utils = require("../../utils/utils");

var _hooks = require("../../utils/hooks");

var _MuiRTL = _interopRequireDefault(require("../MuiRTL/MuiRTL"));

var _viewForm = require("./storyData/schemaData/viewForm");

var _editForm = require("./storyData/schemaData/editForm");

var _createForm = require("./storyData/schemaData/createForm");

var constants = _interopRequireWildcard(require("./constants"));

var _getApis = require("./storyData/mockApis/getApis");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  title: 'FormGenerator',
  parameters: {
    component: _FormGenerator["default"]
  }
};
exports["default"] = _default;

var Story1 = function Story1() {
  (0, _hooks.useBodyRtl)();
  return /*#__PURE__*/_react["default"].createElement(_FormGenerator["default"], {
    customSchema: _viewForm.viewFormSchema,
    formData: _viewForm.viewFormData,
    theme: constants.formGeneratorThemes.THEME_1,
    preview: true
  });
};

exports.Story1 = Story1;
Story1.story = {
  name: 'view'
};

var Story2 = function Story2() {
  (0, _hooks.useBodyRtl)();

  var editFormEntity = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              alert('آیتم با موفقیت ویرایش شد');

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function editFormEntity() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react["default"].createElement(_MuiRTL["default"], null, /*#__PURE__*/_react["default"].createElement(_FormGenerator["default"], {
    customSchema: _editForm.editFormSchema,
    formData: _editForm.editFormData,
    onSubmit: editFormEntity,
    omitExtraData: true
  }));
};

exports.Story2 = Story2;
Story2.story = {
  name: 'edit'
};

var Story3 = function Story3() {
  (0, _hooks.useBodyRtl)();

  var createFormEntity = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              alert('آیتم با موفقیت ایجاد شد');

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function createFormEntity() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react["default"].createElement(_MuiRTL["default"], null, /*#__PURE__*/_react["default"].createElement(_FormGenerator["default"], {
    customSchema: _createForm.createFormSchema,
    onSubmit: createFormEntity
  }));
};

exports.Story3 = Story3;
Story3.story = {
  name: 'create'
};

var Story4 = function Story4() {
  (0, _hooks.useBodyRtl)();
  var selectOfflineSchema = {
    type: 'object',
    properties: {
      daysOfWeek: {
        type: 'array',
        title: 'روز های فعال هفته',
        uniqueItems: true,
        items: {
          type: 'number',
          title: 'روز هفته',
          "enum": [6, 0, 1, 2, 3, 4, 5],
          enumNames: ['شنبه', 'یک‌شنبه', 'دو‌شنبه', 'سه‌شنبه', 'چهار‌شنبه', 'پنج‌شنبه', 'جمعه']
        }
      }
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_MuiRTL["default"], null, /*#__PURE__*/_react["default"].createElement(_FormGenerator["default"], {
    customSchema: selectOfflineSchema,
    theme: constants.formGeneratorThemes.THEME_1
  }));
};

exports.Story4 = Story4;
Story4.story = {
  name: 'select_OFFLINE'
};

var Story5 = function Story5() {
  (0, _hooks.useBodyRtl)();
  var selectOnlineArrayOfObjectsSchema = {
    type: 'object',
    properties: {
      daysOfWeek: {
        type: 'array',
        title: 'سطح‌ها',
        uniqueItems: true,
        items: {
          title: 'سطح',
          type: 'string',
          enumKey: 'id',
          enumNamesKey: 'title',
          enumType: 'ONLINE_ARRAY_OF_OBJECTS',
          url: '/v2/loyaltyClub/tiers'
        }
      }
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_MuiRTL["default"], null, /*#__PURE__*/_react["default"].createElement(_FormGenerator["default"], {
    customSchema: selectOnlineArrayOfObjectsSchema,
    fetchApi: /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return (0, _utils.fetchApi)("https://uber.docker.webdooz.com/api".concat(url));

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                alert('خطا در دریافت اطلاعات');
                return _context3.abrupt("return", null);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 6]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(),
    theme: constants.formGeneratorThemes.THEME_1
  }));
};

exports.Story5 = Story5;
Story5.story = {
  name: 'select_ONLINE_ARRAY_OF_OBJECTS'
};

var Story6 = function Story6() {
  (0, _hooks.useBodyRtl)();
  var actionCallSchema = {
    type: 'object',
    properties: {
      communicate: {
        type: 'action',
        actionType: 'api-call',
        title: 'ارتباط',
        url: '/v2/subscription/assignment/communicate/:id',
        method: 'PUT',
        ui: {
          classNames: 'col-1',
          backgroundColor: '#eee'
        }
      }
    }
  };
  var actionCallData = {
    id: '5f0f08d6b3ba530006216779'
  };
  return /*#__PURE__*/_react["default"].createElement(_MuiRTL["default"], null, /*#__PURE__*/_react["default"].createElement(_FormGenerator["default"], {
    customSchema: actionCallSchema,
    formData: actionCallData,
    fetchApi: /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(url) {
        var response;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return (0, _utils.fetchApi)("https://uber.docker.webdooz.com/api".concat(url));

              case 3:
                response = _context4.sent;
                alert("\u0627\u06A9\u0634\u0646 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F.\n ".concat(url));
                return _context4.abrupt("return", response);

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                alert('خطا در دریافت اطلاعات');
                return _context4.abrupt("return", null);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }(),
    theme: constants.formGeneratorThemes.THEME_1
  }));
};

exports.Story6 = Story6;
Story6.story = {
  name: 'action_CALL'
};

var Story7 = function Story7() {
  (0, _hooks.useBodyRtl)();
  var resourceFieldSchema = {
    type: 'object',
    title: 'دسته‌بندی',
    properties: {
      id: {
        type: 'string',
        title: 'شناسه'
      },
      description: {
        title: 'متن‌ها',
        type: 'object',
        properties: {
          title: {
            type: 'string',
            title: 'عنوان'
          }
        }
      },
      items: {
        type: 'resource',
        title: 'پاداش و جایزه',
        key: 'formgenerator--story-1',
        join: {
          from: '',
          to: ''
        }
      }
    }
  };
  var resourceFieldData = {
    id: '5d4ec045976bf45433333339',
    description: {
      title: 'لباس سفید',
      text: 'متن در مورد لباس سفید',
      summary: 'خلاصه‌ی لباس سفید'
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_MuiRTL["default"], null, /*#__PURE__*/_react["default"].createElement(_FormGenerator["default"], {
    customSchema: resourceFieldSchema,
    formData: resourceFieldData,
    baseFrontFormsUrl: "/?path=/story",
    theme: constants.formGeneratorThemes.THEME_1
  }));
};

exports.Story7 = Story7;
Story7.story = {
  name: 'resource_FIELD'
};

var Story0 = function Story0() {
  (0, _hooks.useBodyRtl)();
  var sampleSchema = {
    type: 'object',
    title: 'عنوان',
    properties: {
      id: {
        type: 'string',
        title: 'شناسه'
      },
      description: {
        title: 'متن‌ها',
        type: 'object',
        properties: {
          title: {
            type: 'string',
            title: 'عنوان'
          }
        }
      }
    }
  };
  var sampleData = {
    id: '111111111111',
    description: {
      title: 'عنوان توضیح',
      text: 'متن توضیح',
      summary: 'خلاصه‌'
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_MuiRTL["default"], null, /*#__PURE__*/_react["default"].createElement(_FormGenerator["default"], {
    customSchema: (0, _addonKnobs.object)('customSchema', sampleSchema),
    formData: (0, _addonKnobs.object)('formData', sampleData),
    theme: (0, _addonKnobs.select)('theme', Object.values(constants.formGeneratorThemes))
  }));
};

exports.Story0 = Story0;
Story0.story = {
  name: 'addon knobs'
};