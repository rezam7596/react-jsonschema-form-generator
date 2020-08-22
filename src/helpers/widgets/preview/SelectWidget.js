import React from 'react';
import PropTypes from 'prop-types';
import PreviewWidget from './PreviewWidget';

function SelectWidget({ id, schema, value, options }) {
  const [valueToLabel] = React.useState(
    options.enumOptions.reduce((preVal, curVal) => ({ ...preVal, [curVal.value]: curVal.label }), {}),
  );
  return (
    <PreviewWidget
      id={id}
      title={schema.title}
      value={schema.uniqueItems ? value.map((selectedItem) => valueToLabel[selectedItem]).join('، ') : valueToLabel[value] || ''}
    />
  );
}

SelectWidget.propTypes = {
  id: PropTypes.string.isRequired,
  schema: PropTypes.shape({
    title: PropTypes.string,
    uniqueItems: PropTypes.bool,
  }).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  options: PropTypes.shape({
    help: PropTypes.string,
    enumOptions: PropTypes.array,
  }).isRequired,
};

export default SelectWidget;
