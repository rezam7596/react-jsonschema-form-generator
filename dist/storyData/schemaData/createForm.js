"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFormSchema = void 0;
var createFormSchema = {
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
        order: ['type', 'isActive', 'isGlobal', 'amount', 'percentage', 'upToAmount', 'guaranteedIncomePerHour', 'isInCongestionZone', 'plateNumberStatus', 'userList', 'role', 'title', 'description', 'numberOfUsagePerUser', 'numberOfUsagePerDayPerUser', 'startDate', 'endDate', 'limitDays', 'cities', 'daysOfWeek', 'carCategories', 'rideInitiator', 'ridesCountUpperBound', 'areaPairs', 'timesOfDay', 'editSensitiveFields']
      },
      required: ['role', 'title', 'type', 'startDate', 'endDate', 'description'],
      properties: {
        role: {
          "enum": ['PASSENGER', 'DRIVER'],
          enumNames: ['مسافر', 'سفیر'],
          type: 'string',
          title: 'سفیر/مسافر'
        },
        title: {
          type: 'string',
          title: 'عنوان',
          ui: {
            help: 'این عنوان reward در سیستم است و جایی نمایش داده نمی شود. حتما انگلیسی باشد.'
          }
        },
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
        startDate: {
          type: 'number',
          format: 'date-time',
          title: 'تاریخ شروع',
          ui: {
            classNames: 'col-4'
          }
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
        type: {
          "enum": [0, 1, 2, 3, 4],
          enumNames: ['ADD_TO_CREDIT', 'PERCENTAGE_ON_RIDE', 'AMOUNT_ON_RIDE', 'PERCENTAGE_ON_COMMISSION', 'GUARANTEED_INCOME'],
          type: 'number',
          title: 'نوع پاداش',
          ui: {
            help: 'امکان ویرایش نوع پاداش، پس از گذشت زمان شروع امکان پذیر نیست.'
          }
        },
        userList: {
          type: 'object',
          title: 'لیست کاربران',
          properties: {
            mediaId: {
              type: 'string',
              title: 'شناسه فایل کاربران',
              description: 'فایل اکسل شامل یک ستون که سطر اول آن userId باشد.'
            }
          }
        }
      },
      dependencies: {
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
              areaPairs: {
                type: 'array',
                description: 'در صورتی در میخواهید محدودیت مکانی برای مبدا یا مقصد باشد دو محدودیت جدا تعریف کنید، ' + 'در غیر این صورت هر دو را در یک محدودیت تعریف کنید.',
                title: 'محدودیت مکانی',
                items: {
                  type: 'object',
                  properties: {
                    origin: {
                      type: 'object',
                      title: 'مبدا',
                      properties: {
                        radius: {
                          title: 'شعاع',
                          type: 'number'
                        },
                        center: {
                          title: 'مرکز',
                          type: 'object',
                          properties: {
                            latitude: {
                              title: 'عرض جغرافیایی - latitude',
                              type: 'number',
                              ui: {
                                classNames: 'col-6'
                              }
                            },
                            longitude: {
                              title: 'طول جغرافیایی - longitude',
                              type: 'number',
                              ui: {
                                classNames: 'col-6'
                              }
                            }
                          }
                        }
                      },
                      ui: {
                        classNames: 'col-6'
                      }
                    },
                    destination: {
                      type: 'object',
                      title: 'مقصد',
                      properties: {
                        radius: {
                          title: 'شعاع',
                          type: 'number'
                        },
                        center: {
                          title: 'مرکز',
                          type: 'object',
                          properties: {
                            latitude: {
                              title: 'عرض جغرافیایی - latitude',
                              type: 'number',
                              ui: {
                                classNames: 'col-6'
                              }
                            },
                            longitude: {
                              title: 'طول جغرافیایی - longitude',
                              type: 'number',
                              ui: {
                                classNames: 'col-6'
                              }
                            }
                          }
                        }
                      },
                      ui: {
                        classNames: 'col-6'
                      }
                    }
                  }
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
              },
              isGlobal: {
                type: 'boolean',
                title: 'سراسری',
                ui: {
                  help: 'این گزینه،‌ به پاداش قابلیت استفاده توسط همه‌ی کاربران را می‌دهد و دیگر نیازی به لیست کاربران نیست.'
                }
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
              areaPairs: {
                type: 'array',
                description: 'در صورتی در میخواهید محدودیت مکانی برای مبدا یا مقصد باشد دو محدودیت جدا تعریف کنید، در غیر' + ' این صورت هر دو را در یک محدودیت تعریف کنید.',
                title: 'محدودیت مکانی',
                items: {
                  type: 'object',
                  properties: {
                    origin: {
                      type: 'object',
                      title: 'مبدا',
                      properties: {
                        radius: {
                          title: 'شعاع',
                          type: 'number'
                        },
                        center: {
                          title: 'مرکز',
                          type: 'object',
                          properties: {
                            latitude: {
                              title: 'عرض جغرافیایی - latitude',
                              type: 'number',
                              ui: {
                                classNames: 'col-6'
                              }
                            },
                            longitude: {
                              title: 'طول جغرافیایی - longitude',
                              type: 'number',
                              ui: {
                                classNames: 'col-6'
                              }
                            }
                          }
                        }
                      },
                      ui: {
                        classNames: 'col-6'
                      }
                    },
                    destination: {
                      type: 'object',
                      title: 'مقصد',
                      properties: {
                        radius: {
                          title: 'شعاع',
                          type: 'number'
                        },
                        center: {
                          title: 'مرکز',
                          type: 'object',
                          properties: {
                            latitude: {
                              title: 'عرض جغرافیایی - latitude',
                              type: 'number',
                              ui: {
                                classNames: 'col-6'
                              }
                            },
                            longitude: {
                              title: 'طول جغرافیایی - longitude',
                              type: 'number',
                              ui: {
                                classNames: 'col-6'
                              }
                            }
                          }
                        }
                      },
                      ui: {
                        classNames: 'col-6'
                      }
                    }
                  }
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
              },
              isGlobal: {
                type: 'boolean',
                title: 'سراسری',
                ui: {
                  help: 'این گزینه،‌ به پاداش قابلیت استفاده توسط همه‌ی کاربران را می‌دهد و دیگر نیازی به لیست کاربران نیست.'
                }
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
exports.createFormSchema = createFormSchema;