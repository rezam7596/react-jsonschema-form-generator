import React from 'react';
import DateTimeWidget from './DateTimeWidget';

function DateWidget(props) {
  return <DateTimeWidget {...props} timePickerEnabled={false} />;
}
export default DateWidget;
