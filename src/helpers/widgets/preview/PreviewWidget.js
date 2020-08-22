import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from './PreviewWidget.scss';

function PreviewWidget({ id, title, value }) {
  return (
    <div onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()} className="preview-widget" id={id}>
      <h3>{title}:</h3>
      <p>{value === undefined || value === null ? '' : value}</p>
    </div>
  );
}

PreviewWidget.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default withStyles(style)(PreviewWidget);
