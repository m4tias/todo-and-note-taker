import React from 'react';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesay',
  'Thursday',
  'Friday',
  'Saturday',
];

export default function Timer() {
  let time = new Date();

  return (
    <div className="timer">
      <div className="timer__date">
        <div className="timer__day">{time.getDate()}</div>
        <div className="timer__month-and-year">
          <div className="timer__month">{months[time.getMonth()]}</div>
          <div className="time__year">{time.getFullYear()}</div>
        </div>
      </div>
      <div className="timer__weekday">{days[time.getDay()]}</div>
    </div>
  );
}
