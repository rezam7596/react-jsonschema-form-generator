"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editFormData = exports.editFormSchema = void 0;
var editFormSchema = {
  type: 'object',
  title: 'جایزه و پاداش',
  ui: {
    options: {
      wrapped: true
    }
  },
  required: ['reward'],
  properties: {
    reward: {
      type: 'object',
      title: 'پاداش',
      ui: {
        order: ['description', 'numberOfUsagePerUser', 'numberOfUsagePerDayPerUser', 'type', 'amount', 'percentage', 'upToAmount', 'guaranteedIncomePerHour', 'startDate', 'endDate', 'limitDays', 'cities', 'daysOfWeek', 'carCategories', 'rideInitiator', 'ridesCountUpperBound', 'isActive', 'editSensitiveFields', 'isInCongestionZone', 'plateNumberStatus', 'timesOfDay']
      },
      properties: {
        description: {
          type: 'object',
          title: 'تعریف در اپلیکیشن',
          properties: {
            title: {
              type: 'string',
              title: 'عنوان در اپلیکیشن',
              ui: {
                classNames: 'col-4'
              }
            },
            text: {
              type: 'string',
              title: 'متن در اپلیکیشن',
              ui: {
                classNames: 'col-4'
              }
            }
          }
        },
        numberOfUsagePerUser: {
          title: 'سقف استفاده‌ی کل کاربر',
          type: 'number',
          ui: {
            classNames: 'col-4'
          }
        },
        numberOfUsagePerDayPerUser: {
          title: 'سقف استفاده‌ی روزانه کاربر',
          type: 'number',
          ui: {
            classNames: 'col-4'
          }
        },
        amount: {
          type: 'number',
          title: 'مقدار'
        },
        percentage: {
          title: 'درصد',
          type: 'number'
        },
        upToAmount: {
          title: 'مقدار حداکثر',
          type: 'number'
        },
        endDate: {
          type: 'number',
          format: 'date-time',
          title: 'تاریخ پایان',
          ui: {
            classNames: 'col-4'
          }
        },
        limitDays: {
          type: 'number',
          title: 'مهلت روزانه',
          ui: {
            classNames: 'col-4'
          }
        },
        cities: {
          type: 'array',
          title: 'شهرها',
          ui: {
            help: 'در صورت انتخاب نکردن هیچ کدام از گزینه ها، کد تخفیف بر روی همه‌ی شهر ها اعمال می‌شود.'
          },
          uniqueItems: true,
          items: {
            title: 'شهر',
            type: 'string',
            "enum": ['TEHRAN', 'KARAJ', 'ISFAHAN', 'MASHHAD', 'SHIRAZ', 'TABRIZ', 'URMIA', 'RASHT', 'LAHIJAN', 'BANDAR_E_ANZALI', 'SARI', 'YAZD', 'QOM', 'KERMAN', 'AHVAZ', 'QAEM_SHAHR', 'BABOL', 'AMOL'],
            enumNames: ['تهران', 'کرج', 'اصفهان', 'مشهد', 'شیراز', 'تبریز', 'ارومیه', 'رشت', 'لاهیجان', 'بندر انزلی', 'ساری', 'یزد', 'قم', 'کرمان', 'اهواز', 'قائم‌شهر', 'بابل', 'آمل']
          }
        },
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
        },
        carCategories: {
          type: 'array',
          title: 'نوع سرویس',
          ui: {
            help: 'در صورت انتخاب نکردن هیچ کدام از گزینه ها، کد تخفیف بر روی همه‌ی سرویس ها اعمال می‌شود.'
          },
          uniqueItems: true,
          items: {
            type: 'number',
            title: 'نوع سرویس',
            "enum": [1, 5, 6, 7],
            enumNames: ['تپ‌سی', 'تپ‌سی لاین', 'همیار', 'پیک']
          }
        },
        rideInitiator: {
          type: 'array',
          title: 'پلتفرم درخواست سفر',
          ui: {
            help: 'در صورت انتخاب نکردن هیچ کدام از گزینه ها، کد تخفیف بر روی همه‌ی پلتفرم ها اعمال می‌شود.'
          },
          uniqueItems: true,
          items: {
            title: 'پلتفرم درخواست سفر',
            type: 'number',
            "enum": [0, 1, 2, 3, 4, 5],
            enumNames: ['APP', 'CORPORATE', 'TRAINER', 'ORDER-BY-PHONE', 'CORPORATE-TRAINER', 'WEB']
          }
        },
        ridesCountUpperBound: {
          type: 'object',
          title: 'محدودیت تعداد سفر‌های پیشین',
          ui: {
            help: 'حداکثر تعداد سفر پیشین مسافر برای بهره مند شدن از این تخفیف (برای سفر اولی ها کاربرد دارد)'
          },
          properties: {
            LINE: {
              type: 'number',
              title: 'سفر لاین',
              ui: {
                classNames: 'col-4'
              }
            },
            NORMAL: {
              type: 'number',
              title: 'سفر کلاسیک',
              ui: {
                classNames: 'col-4'
              }
            },
            TOTAL: {
              type: 'number',
              title: 'کل سفرها',
              ui: {
                classNames: 'col-4'
              }
            }
          }
        },
        editSensitiveFields: {
          type: 'boolean',
          title: 'با زدن این گزینه امکان ویرایش فیلد های حساس را خواهید داشت',
          description: 'توجه داشته باشید که فقط در صورتی امکان ویرایش فیلد های حساس را خواهید داشت که تاریخ شروع پاداش نگذشته باشد.'
        }
      },
      dependencies: {
        editSensitiveFields: {
          oneOf: [{
            properties: {
              editSensitiveFields: {
                "enum": [true]
              },
              type: {
                "enum": [0, 1, 2, 3, 4],
                enumNames: ['ADD_TO_CREDIT', 'PERCENTAGE_ON_RIDE', 'AMOUNT_ON_RIDE', 'PERCENTAGE_ON_COMMISSION', 'GUARANTEED_INCOME'],
                type: 'number',
                title: 'نوع پاداش',
                ui: {
                  help: 'امکان ویرایش نوع پاداش، پس از گذشت زمان شروع امکان پذیر نیست.'
                }
              },
              startDate: {
                type: 'number',
                format: 'date-time',
                title: 'تاریخ شروع',
                ui: {
                  classNames: 'col-4'
                }
              },
              isInCongestionZone: {
                type: 'boolean',
                title: 'اعمال در طرح ترافیک',
                ui: {
                  help: 'امکان ویرایش اعمال در طرح ترافیک، پس از گذشت زمان شروع پاداش امکان پذیر نیست.'
                }
              },
              plateNumberStatus: {
                "enum": ['TAXI', 'WHEELCHAIR'],
                enumNames: ['تاکسی', 'ویلچیر'],
                type: 'string',
                title: 'ویلچر یا تاکسی',
                ui: {
                  help: 'امکان ویرایش این قسمت، پس از گذشت زمان شروع پاداش امکان پذیر نیست.'
                }
              },
              timesOfDay: {
                type: 'array',
                title: 'زمان فعال در روز',
                ui: {
                  help: 'امکان ویرایش زمان فعال در روز، پس از گذشت زمان شروع پاداش امکان پذیر نیست.'
                },
                items: {
                  type: 'object',
                  title: 'زمان فعال',
                  ui: {
                    options: {
                      wrapped: true
                    }
                  },
                  properties: {
                    from: {
                      type: 'object',
                      title: 'زمان شروع',
                      properties: {
                        hour: {
                          type: 'number',
                          title: 'ساعت',
                          ui: {
                            classNames: 'col-6'
                          }
                        },
                        minute: {
                          type: 'number',
                          title: 'دقیقه',
                          ui: {
                            classNames: 'col-6'
                          }
                        }
                      }
                    },
                    to: {
                      type: 'object',
                      title: 'زمان پایان',
                      properties: {
                        hour: {
                          title: 'ساعت',
                          type: 'number',
                          ui: {
                            classNames: 'col-6'
                          }
                        },
                        minute: {
                          title: 'دقیقه',
                          type: 'number',
                          ui: {
                            classNames: 'col-6'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }, {
            properties: {
              editSensitiveFields: {
                "enum": [false]
              }
            }
          }]
        },
        type: {
          oneOf: [{
            required: ['amount'],
            properties: {
              type: {
                "enum": [0]
              },
              amount: {
                type: 'number',
                title: 'مقدار'
              }
            }
          }, {
            required: ['percentage', 'upToAmount'],
            properties: {
              type: {
                "enum": [1]
              },
              percentage: {
                title: 'درصد',
                type: 'number'
              },
              upToAmount: {
                title: 'مقدار حداکثر',
                type: 'number'
              }
            }
          }, {
            required: ['percentage'],
            properties: {
              type: {
                "enum": [3]
              },
              percentage: {
                title: 'درصد',
                type: 'number'
              }
            }
          }, {
            required: ['amount'],
            properties: {
              type: {
                "enum": [2]
              },
              amount: {
                type: 'number',
                title: 'مقدار'
              }
            }
          }, {
            required: ['guaranteedIncomePerHour'],
            properties: {
              type: {
                "enum": [4]
              },
              guaranteedIncomePerHour: {
                type: 'number',
                title: 'درآمد ساعتی',
                ui: {
                  help: 'امکان ویرایش رآمد ساعتی، پس از گذشت زمان شروع پاداش امکان پذیر نیست.'
                }
              }
            }
          }]
        }
      }
    }
  }
};
exports.editFormSchema = editFormSchema;
var editFormData = {
  reward: {
    id: '5f0f08d6b3ba530006216779',
    role: 'PASSENGER',
    title: 'TEN_DAY_WELCOME_REWARD',
    type: 1,
    description: {
      title: 'تخفیف ۲۰ درصدی اولین سفر با تپ‌سی',
      text: 'همراه گرامی‌\nبا کد تخفیف ۲۰٪ که برای شما فعال شده است اولین سفرتان را با تپ‌سی تجربه کنید.'
    },
    percentage: 20,
    upToAmount: 5000,
    numberOfUsagePerUser: 1,
    limitDays: 10,
    daysOfWeek: [],
    carCategories: [],
    cities: [],
    areaPairs: [],
    timesOfDay: [],
    rideInitiator: [],
    isActive: true,
    isGlobal: false
  }
};
exports.editFormData = editFormData;