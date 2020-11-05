import React from 'react';
import PropTypes from 'prop-types';
import style from './ArrayFieldTemplate.scss';

function ArrayFieldTemplate({ canAdd, onAddClick, disabled, readonly, items }) {
  return (
    <div className="array-field-template">
      {!disabled && !readonly && canAdd && (
        <button type="button" className="array-field-template-add-button" onClick={onAddClick}>
          <i className="fa fa-plus" />
        </button>
      )}
      <div className="array-field-template-items">
        {items.map(({ children, hasMoveDown, hasRemove, onDropIndexClick, onReorderClick, index, key }) => (
          <div className="array-field-template-item" key={key}>
            <div className="array-field-template-item-children">{children}</div>
            <div className="array-field-template-item-buttons">
              {!disabled && !readonly && hasMoveDown && (
                <button type="button" onClick={onReorderClick(index, index + 1)}>
                  <i className="fa fa-angle-double-down" />
                </button>
              )}
              {!disabled && !readonly && hasRemove && (
                <button type="button" onClick={onDropIndexClick(index)}>
                  <i className="fa fa-trash" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ArrayFieldTemplate.propTypes = {
  canAdd: PropTypes.bool.isRequired,
  onAddClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  readonly: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.node,
      hasMoveDown: PropTypes.bool,
      hasRemove: PropTypes.bool,
      onDropIndexClick: PropTypes.func,
      onReorderClick: PropTypes.func,
      index: PropTypes.number,
      key: PropTypes.string,
    }),
  ).isRequired,
};

export default ArrayFieldTemplate;
