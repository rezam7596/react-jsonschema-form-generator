import React from 'react';
import DateTimeWidget from './DateTimeWidget';

function DateWidget(props) {
  return <DateTimeWidget timePicker={false} {...props} />;
}

export default DateWidget;
