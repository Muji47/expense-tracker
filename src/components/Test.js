import React, { useState } from 'react';
import moment from 'moment';

function DateInputAndRelativeTime() {
  const [inputDate, setInputDate] = useState('');
  const [relativeTime, setRelativeTime] = useState('');

  const handleDateInputChange = (event) => {
    const newDate = event.target.value;
    setInputDate(newDate);

    // Calculate the relative time from now
    const now = moment();
    const selectedDate = moment(newDate);
    const diff = now.diff(selectedDate);
    const relative = moment.duration(diff);
  };

  return (
    <div>
      <label htmlFor="dateInput">Enter a date:</label>
      <input
        type="date"
        id="dateInput"
        value={inputDate}
        onChange={handleDateInputChange}
      />

      {inputDate && (
        <div>
          <p>Relative time from now: {relativeTime}</p>
        </div>
      )}
    </div>
  );
}

export default DateInputAndRelativeTime;
