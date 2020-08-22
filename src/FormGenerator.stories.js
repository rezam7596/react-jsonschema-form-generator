import React from 'react';
import { object, select } from '@storybook/addon-knobs';
import FormGenerator from './FormGenerator';
import { fetchApi } from '../../utils/utils';
import { useBodyRtl } from '../../utils/hooks';
import MuiRTL from '../MuiRTL/MuiRTL';
import { viewFormData, viewFormSchema } from './storyData/schemaData/viewForm';
import { editFormData, editFormSchema } from './storyData/schemaData/editForm';
import { createFormSchema } from './storyData/schemaData/createForm';
import * as constants from './constants';
// eslint-disable-next-line no-unused-vars
import { getLoyaltyTiers, getAssignmentAction } from './storyData/mockApis/getApis';

export default {
  title: 'FormGenerator',
  parameters: {
    component: FormGenerator,
  },
};

export const Story1 = () => {
  useBodyRtl();
  return (
    <FormGenerator customSchema={viewFormSchema} formData={viewFormData} theme={constants.formGeneratorThemes.THEME_1} preview />
  );
};
Story1.story = { name: 'view' };

export const Story2 = () => {
  useBodyRtl();
  const editFormEntity = async () => {
    alert('آیتم با موفقیت ویرایش شد');
  };
  return (
    <MuiRTL>
      <FormGenerator customSchema={editFormSchema} formData={editFormData} onSubmit={editFormEntity} omitExtraData />
    </MuiRTL>
  );
};
Story2.story = { name: 'edit' };

export const Story3 = () => {
  useBodyRtl();
  const createFormEntity = async () => {
    alert('آیتم با موفقیت ایجاد شد');
  };
  return (
    <MuiRTL>
      <FormGenerator customSchema={createFormSchema} onSubmit={createFormEntity} />
    </MuiRTL>
  );
};
Story3.story = { name: 'create' };

export const Story4 = () => {
  useBodyRtl();
  const selectOfflineSchema = {
    type: 'object',
    properties: {
      daysOfWeek: {
        type: 'array',
        title: 'روز های فعال هفته',
        uniqueItems: true,
        items: {
          type: 'number',
          title: 'روز هفته',
          enum: [6, 0, 1, 2, 3, 4, 5],
          enumNames: ['شنبه', 'یک‌شنبه', 'دو‌شنبه', 'سه‌شنبه', 'چهار‌شنبه', 'پنج‌شنبه', 'جمعه'],
        },
      },
    },
  };
  return (
    <MuiRTL>
      <FormGenerator customSchema={selectOfflineSchema} theme={constants.formGeneratorThemes.THEME_1} />
    </MuiRTL>
  );
};
Story4.story = { name: 'select_OFFLINE' };

export const Story5 = () => {
  useBodyRtl();

  const selectOnlineArrayOfObjectsSchema = {
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
          url: '/v2/loyaltyClub/tiers',
        },
      },
    },
  };
  return (
    <MuiRTL>
      <FormGenerator
        customSchema={selectOnlineArrayOfObjectsSchema}
        fetchApi={async (url) => {
          try {
            return await fetchApi(`https://uber.docker.webdooz.com/api${url}`);
          } catch (e) {
            alert('خطا در دریافت اطلاعات');
            return null;
          }
        }}
        theme={constants.formGeneratorThemes.THEME_1}
      />
    </MuiRTL>
  );
};
Story5.story = { name: 'select_ONLINE_ARRAY_OF_OBJECTS' };

export const Story6 = () => {
  useBodyRtl();

  const actionCallSchema = {
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
          backgroundColor: '#eee',
        },
      },
    },
  };

  const actionCallData = {
    id: '5f0f08d6b3ba530006216779',
  };
  return (
    <MuiRTL>
      <FormGenerator
        customSchema={actionCallSchema}
        formData={actionCallData}
        fetchApi={async (url) => {
          try {
            const response = await fetchApi(`https://uber.docker.webdooz.com/api${url}`);
            alert(`اکشن با موفقیت انجام شد.\n ${url}`);
            return response;
          } catch (e) {
            alert('خطا در دریافت اطلاعات');
            return null;
          }
        }}
        theme={constants.formGeneratorThemes.THEME_1}
      />
    </MuiRTL>
  );
};
Story6.story = { name: 'action_CALL' };

export const Story7 = () => {
  useBodyRtl();

  const resourceFieldSchema = {
    type: 'object',
    title: 'دسته‌بندی',
    properties: {
      id: { type: 'string', title: 'شناسه' },
      description: { title: 'متن‌ها', type: 'object', properties: { title: { type: 'string', title: 'عنوان' } } },
      items: { type: 'resource', title: 'پاداش و جایزه', key: 'formgenerator--story-1', join: { from: '', to: '' } },
    },
  };

  const resourceFieldData = {
    id: '5d4ec045976bf45433333339',
    description: { title: 'لباس سفید', text: 'متن در مورد لباس سفید', summary: 'خلاصه‌ی لباس سفید' },
  };
  return (
    <MuiRTL>
      <FormGenerator
        customSchema={resourceFieldSchema}
        formData={resourceFieldData}
        baseFrontFormsUrl="/?path=/story"
        theme={constants.formGeneratorThemes.THEME_1}
      />
    </MuiRTL>
  );
};
Story7.story = { name: 'resource_FIELD' };

export const Story0 = () => {
  useBodyRtl();

  const sampleSchema = {
    type: 'object',
    title: 'عنوان',
    properties: {
      id: { type: 'string', title: 'شناسه' },
      description: { title: 'متن‌ها', type: 'object', properties: { title: { type: 'string', title: 'عنوان' } } },
    },
  };
  const sampleData = {
    id: '111111111111',
    description: { title: 'عنوان توضیح', text: 'متن توضیح', summary: 'خلاصه‌' },
  };

  return (
    <MuiRTL>
      <FormGenerator
        customSchema={object('customSchema', sampleSchema)}
        formData={object('formData', sampleData)}
        theme={select('theme', Object.values(constants.formGeneratorThemes))}
      />
    </MuiRTL>
  );
};
Story0.story = { name: 'addon knobs' };
