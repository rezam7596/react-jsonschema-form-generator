import React from 'react';
import PropTypes from 'prop-types';
import { CheckBox } from 'tapsi-components';

function CheckboxWidget({ value, label, id, onChange, disabled }) {
  return (
    <div id={id}>
      <CheckBox onChange={(e) => onChange(e.target.checked)} checked={value} disabled={disabled} label={label} />
    </div>
  );
}

CheckboxWidget.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default CheckboxWidget;
