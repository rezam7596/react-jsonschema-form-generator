import React from 'react';
import PropTypes from 'prop-types';
import PreviewWidget from './PreviewWidget';

function TextWidget({ id, schema, value }) {
  return <PreviewWidget id={id} title={schema.title} value={value === undefined || value === null ? '' : value} />;
}

TextWidget.propTypes = {
  id: PropTypes.string.isRequired,
  schema: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  value: PropTypes.string.isRequired,
};

export default TextWidget;
