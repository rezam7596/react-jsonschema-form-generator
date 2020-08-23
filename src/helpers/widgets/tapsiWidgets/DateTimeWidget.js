import React from 'react';
import PropTypes from 'prop-types';
import DateTime from 'tapsi-components/DateTime';

function DateTimeWidget(props) {
  const {
    schema: { title },
    onChange,
    value,
    required,
    readonly,
    disabled,
    autofocus,
    rawErrors,
    placeholder,
    timePickerEnabled,
  } = props;
  return (
    <DateTime
      title={title}
      onChange={onChange}
      value={value}
      onClear={() => {
        onChange('');
      }}
      required={required}
      readonly={readonly}
      disabled={disabled}
      autoFocus={autofocus}
      error={Boolean(rawErrors && rawErrors.length)}
      placeholder={placeholder}
      timePickerEnabled={timePickerEnabled}
      removeDateEnabled
      theme="theme-2"
    />
  );
}

DateTimeWidget.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  schema: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  required: PropTypes.bool.isRequired,
  readonly: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  autofocus: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  rawErrors: PropTypes.array.isRequired,
  timePickerEnabled: PropTypes.bool.isRequired,
};

DateTimeWidget.defaultPropTypes = {
  timePickerEnabled: true,
};

export default DateTimeWidget;
