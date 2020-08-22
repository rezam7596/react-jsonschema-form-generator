import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-jalaali';
import { convertEnglishNumberToPersianNumber } from '../../../../../utils';
import PreviewWidget from './PreviewWidget';

moment.loadPersian({ usePersianDigits: false, dialect: 'persian-modern' });

function DateTimeWidget({ id, schema, value, timePicker }) {
  return (
    <PreviewWidget
      id={id}
      title={schema.title}
      value={value && convertEnglishNumberToPersianNumber(moment(value).format(timePicker ? 'HH:mm jYYYY/jM/jD' : 'jYYYY/jM/jD'))}
    />
  );
}

DateTimeWidget.propTypes = {
  id: PropTypes.string.isRequired,
  schema: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  value: PropTypes.number.isRequired,
  timePicker: PropTypes.bool,
};

DateTimeWidget.defaultProps = {
  timePicker: true,
};

export default DateTimeWidget;
