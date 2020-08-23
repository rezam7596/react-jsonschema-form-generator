/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'tapsi-components/TextField';

function TextWidget({
  id,
  schema,
  value,
  placeholder,
  rawErrors,
  required,
  disabled,
  readonly,
  autofocus,
  onChange,
  options,
  onClick,
  multiline,
  select,
  children,
}) {
  return (
    <TextField
      inputProps={{ style: { height: 'auto' } }}
      numeric={schema.type === 'number'}
      id={id}
      title={schema.title}
      placeholder={placeholder}
      value={value === undefined || value === null ? '' : value}
      onChange={(e) => onChange(e.target.value)}
      error={Boolean(rawErrors && rawErrors.length)}
      required={required}
      disabled={disabled}
      InputProps={{ onClick, readOnly: readonly }}
      autoFocus={autofocus}
      helperText={options.help}
      multiline={multiline}
      rows={3}
      select={select}
      theme="theme-2"
    >
      {children}
    </TextField>
  );
}

TextWidget.propTypes = {
  id: PropTypes.string.isRequired,
  schema: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
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
  onClick: PropTypes.func,
  multiline: PropTypes.bool,
  select: PropTypes.bool,
  children: PropTypes.node,
};

TextWidget.defaultProps = {
  onClick: null,
  multiline: false,
  select: false,
  children: null,
};

export default TextWidget;
