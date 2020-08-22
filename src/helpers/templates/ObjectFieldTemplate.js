import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from './ObjectFieldTemplate.scss';

function ObjectFieldTemplate({ properties }) {
  return <div className="object-field-template">{properties.map((element) => element.content)}</div>;
}

ObjectFieldTemplate.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node,
    }),
  ).isRequired,
};

export default withStyles(style)(ObjectFieldTemplate);
