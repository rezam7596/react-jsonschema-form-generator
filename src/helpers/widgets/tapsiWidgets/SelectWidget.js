import React from 'react';
import PropTypes from 'prop-types';
import { deepGetBfs, notifyError } from '../../../utils';

import AutoComplete from '../../../../AutoComplete/AutoComplete';

const setEnumInCustomSchema = (customSchema, url, data) => {
  if (customSchema.url && customSchema.url === url) {
    return {
      ...customSchema,
      ...data,
    };
  }
  if (customSchema.type === 'object') {
    return {
      ...customSchema,
      properties: Object.keys(customSchema.properties)
        .map((key) => ({ [key]: setEnumInCustomSchema(customSchema.properties[key], url, data) }))
        .reduce((properties, property) => ({ ...properties, ...property }), {}),
    };
  }
  if (customSchema.type === 'array') {
    return {
      ...customSchema,
      items: setEnumInCustomSchema(customSchema.items, url, data),
    };
  }
  return customSchema;
};

function SelectWidget({
  schema,
  value,
  rawErrors,
  required,
  disabled,
  readonly,
  autofocus,
  onChange,
  options: { help, enumOptions },
  formContext: { setCustomSchema, fetchApi, fetchApiConfig },
}) {
  const url = schema.url || (schema.items || {}).url;
  const enumType = schema.enumType || (schema.items || {}).enumType || 'OFFLINE';
  const enumKey = schema.enumKey || (schema.items || {}).enumKey;
  const enumNamesKey = schema.enumNamesKey || (schema.items || {}).enumNamesKey;
  const searchMode = schema.searchMode || (schema.items || {}).searchMode || 'OFFLINE';
  const lastSearchApiCallAbortController = React.useRef(null);
  const mergeSchemaWithServerData = (serverData) => {
    if (enumType === 'ONLINE_OBJECT') {
      const _enum = Object.keys(serverData);
      const enumNames = Object.values(serverData);
      setCustomSchema((previousCustomSchema) => setEnumInCustomSchema(previousCustomSchema, url, { enum: _enum, enumNames }));
    } else if (enumType === 'ONLINE_ARRAY_OF_OBJECTS') {
      const _enum = serverData.map((option) => deepGetBfs(option, enumKey));
      const enumNames = serverData.map((option) => deepGetBfs(option, enumNamesKey));
      setCustomSchema((previousCustomSchema) => setEnumInCustomSchema(previousCustomSchema, url, { enum: _enum, enumNames }));
    }
  };
  const searchOptions = async (inputValue) => {
    if (searchMode === 'ONLINE') {
      try {
        if (lastSearchApiCallAbortController.current) {
          lastSearchApiCallAbortController.current.abort();
        }
        const currentSearchApiCallAbortController = new AbortController();
        lastSearchApiCallAbortController.current = currentSearchApiCallAbortController;
        const serverSearchedData = await fetchApi(`${url}?q=${inputValue}`, {
          method: 'GET',
          ...fetchApiConfig?.GET(),
          signal: lastSearchApiCallAbortController.signal,
        });
        mergeSchemaWithServerData(serverSearchedData);
      } catch (e) {
        notifyError(e.message || e.code || 'خطا در  جستجو گزینه‌های select');
      }
    }
  };
  React.useEffect(() => {
    (async function () {
      if (enumType.includes('ONLINE')) {
        try {
          const serverData = await fetchApi(url, { method: 'GET', ...fetchApiConfig?.GET() });
          mergeSchemaWithServerData(serverData);
        } catch (e) {
          notifyError(e.message || e.code || 'خطا در دریافت گزینه‌های select');
        }
      }
    })();
  }, []);

  return (
    <AutoComplete
      value={value}
      onChange={(event, newValue) => onChange(newValue)}
      onInputChange={(event, newValue) => searchOptions(newValue)}
      disabled={disabled}
      multiple={schema.uniqueItems && schema.type === 'array'}
      title={schema.title}
      error={Boolean(rawErrors && rawErrors.length)}
      required={required}
      readOnly={readonly}
      autoFocus={autofocus}
      helperText={help}
      theme="theme-2"
    >
      {enumOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </AutoComplete>
  );
}

SelectWidget.propTypes = {
  schema: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    uniqueItems: PropTypes.bool,
    enumType: PropTypes.oneOf(['OFFLINE', 'ONLINE_OBJECT', 'ONLINE_ARRAY_OF_OBJECTS']),
    enum: PropTypes.array,
    enumNames: PropTypes.array,
    enumKey: PropTypes.string,
    enumNamesKey: PropTypes.string,
    searchMode: PropTypes.string,
    url: PropTypes.string,
    items: PropTypes.shape({
      enumType: PropTypes.oneOf(['OFFLINE', 'ONLINE_OBJECT', 'ONLINE_ARRAY_OF_OBJECTS']),
      enum: PropTypes.array,
      enumNames: PropTypes.array,
      enumKey: PropTypes.string,
      enumNamesKey: PropTypes.string,
      url: PropTypes.string,
    }),
  }).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  rawErrors: PropTypes.array.isRequired,
  required: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  readonly: PropTypes.bool.isRequired,
  autofocus: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.shape({
    help: PropTypes.string,
    enumOptions: PropTypes.array,
  }).isRequired,
  formContext: PropTypes.shape({
    setCustomSchema: PropTypes.func,
    fetchApi: PropTypes.func,
    fetchApiConfig: PropTypes.object,
  }).isRequired,
};

export default SelectWidget;
