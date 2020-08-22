/* eslint-disable no-param-reassign */
import deepMerge from 'deepmerge';

const specialUiSchemaAttributes = ['classNames'];

const customTypesUiFields = {
  action: {
    type: 'string',
    uiSchema: 'ActionField',
  },
  resource: {
    type: 'string',
    uiSchema: 'ResourceField',
  },
};

const customizeSchema = ({ ...jsonSchema }, { ...uiSchema }) => {
  if (jsonSchema.type === 'string' && jsonSchema.format === 'big-text') {
    uiSchema['ui:widget'] = 'textarea';
  } else if (jsonSchema.type === 'number' && ['date', 'date-time'].includes(jsonSchema.format)) {
    uiSchema['ui:widget'] = jsonSchema.format === 'date' ? 'DateWidget' : 'DateTimeWidget';
  } else if (jsonSchema.type === 'array' && jsonSchema.uniqueItems && (jsonSchema.items || {}).enumType !== undefined) {
    uiSchema['ui:widget'] = 'SelectWidget';
    delete uiSchema.items['ui:widget'];
  } else if (jsonSchema.enumType !== undefined) {
    jsonSchema.enum = jsonSchema.enum || [];
    uiSchema['ui:widget'] = 'SelectWidget';
  } else if (customTypesUiFields[jsonSchema.type]) {
    uiSchema['ui:field'] = customTypesUiFields[jsonSchema.type].uiSchema;
    jsonSchema.type = customTypesUiFields[jsonSchema.type].type;
  }
  return [jsonSchema, uiSchema];
};

const rawUiToUiSchema = (rawUi) => {
  const uiSchema = {};
  for (const element in rawUi) {
    if (Object.prototype.hasOwnProperty.call(rawUi, element)) {
      if (specialUiSchemaAttributes.includes(element)) {
        uiSchema[element] = rawUi[element];
      } else {
        uiSchema[`ui:${element}`] = rawUi[element];
      }
    }
  }
  return uiSchema;
};

export default function rawJsonToJsonSchemaAndUiSchema(rawJson) {
  let jsonSchema = {};
  let uiSchema = {};
  Object.keys(rawJson).forEach((key) => {
    if (['properties', 'dependencies'].includes(key) && !Array.isArray(rawJson[key])) {
      jsonSchema[key] = {};
      Object.keys(rawJson[key]).forEach((innerKey) => {
        const [innerJsonSchema, innerUiSchema] = rawJsonToJsonSchemaAndUiSchema(rawJson[key][innerKey]);
        jsonSchema[key][innerKey] = innerJsonSchema;
        if (key === 'dependencies') {
          uiSchema = deepMerge(uiSchema, innerUiSchema);
        } else {
          uiSchema[innerKey] = deepMerge(uiSchema[innerKey] || {}, innerUiSchema);
        }
      });
    } else if (['items', 'additionalProperties'].includes(key)) {
      const [innerJsonSchema, innerUiSchema] = rawJsonToJsonSchemaAndUiSchema(rawJson[key]);
      jsonSchema[key] = innerJsonSchema;
      uiSchema[key] = innerUiSchema;
    } else if (['anyOf', 'oneOf'].includes(key)) {
      const innerJsonSchemas = [];
      const innerUiSchemas = [];
      rawJson[key]
        .map((item) => rawJsonToJsonSchemaAndUiSchema(item))
        .forEach(([innerJsonSchema, innerUiSchema]) => {
          innerJsonSchemas.push(innerJsonSchema);
          innerUiSchemas.push(innerUiSchema);
        });
      jsonSchema[key] = innerJsonSchemas;
      uiSchema = deepMerge.all([uiSchema, ...innerUiSchemas]);
    } else if (key === 'ui') {
      uiSchema = deepMerge(uiSchema, rawUiToUiSchema(rawJson[key]));
    } else if (!(key.includes('ui:') || specialUiSchemaAttributes.includes(key))) {
      jsonSchema[key] = JSON.parse(JSON.stringify(rawJson[key]));
    } else {
      uiSchema[key] = JSON.parse(JSON.stringify(rawJson[key]));
    }
    [jsonSchema, uiSchema] = customizeSchema(jsonSchema, uiSchema);
  });
  return [jsonSchema, uiSchema];
}
