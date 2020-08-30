"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewFormData = exports.viewFormSchema = void 0;
var viewFormSchema = {
  type: 'object',
  title: 'پاداش - جایزه',
  properties: {
    id: {
      type: 'string',
      title: 'شناسه'
    },
    title: {
      type: 'string',
      title: 'عنوان',
      ui: {
        help: 'این عنوان reward در سیستم است و جایی نمایش داده نمی شود. حتما انگلیسی باشد.'
      }
    },
    role: {
      "enum": ['PASSENGER', 'DRIVER'],
      enumNames: ['مسافر', 'سفیر'],
      type: 'string',
      title: 'سفیر/مسافر'
    },
    isActive: {
      type: 'boolean',
      title: 'فعال'
    }
  },
  ui: {
    classNames: 'form-generator-theme_1'
  }
};
exports.viewFormSchema = viewFormSchema;
var viewFormData = {
  id: '5f0d4dcaf4202200065ea1df',
  role: 'PASSENGER',
  title: 'TAP30-BM386964',
  type: 1,
  description: {
    title: 'تخفیف ۱۰ درصدی',
    text: 'ویژه باشگاه مشتریان ملت - ۵ سفر تا سقف ۱۵۰۰ تومان'
  },
  percentage: 10,
  upToAmount: 1500,
  numberOfUsagePerUser: 5,
  endDate: '2020-08-12T19:29:59.000Z',
  daysOfWeek: [],
  carCategories: [],
  cities: [],
  areaPairs: [],
  timesOfDay: [],
  rideInitiator: [],
  isActive: true,
  isGlobal: false
};
exports.viewFormData = viewFormData;