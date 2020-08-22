import React from 'react';
import PropTypes from 'prop-types';
import PreviewWidget from './PreviewWidget';

function CheckboxWidget({ value, label, id }) {
  return <PreviewWidget id={id} title={label} value={value ? 'بله' : 'خیر'} />;
}

CheckboxWidget.propTypes = {
  value: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CheckboxWidget;
