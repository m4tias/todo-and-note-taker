import React from 'react';
import { useAppState } from '../AppContext';
import { STATUS } from '../constants';

export default function ProgressBar() {
  let { todo } = useAppState();
  let total = todo.length,
    totalDone = todo.filter((e) => e.status === STATUS.DONE).length,
    totalInProgress = todo.filter((e) => e.status === STATUS.IN_PROGRESS)
      .length;

  let percentageDone = (totalDone / total) * 100;
  let percentageInProgress = percentageDone + (totalInProgress / total) * 100;

  return (
    <div className="progressbar">
      <div
        className="progressbar__bar progressbar__bar-in_progress"
        style={{ width: total !== 0 ? `${percentageInProgress}%` : 0 }}
      />
      <div
        className="progressbar__bar progressbar__bar-done"
        style={{ width: total !== 0 ? `${percentageDone}%` : 0 }}
      />
    </div>
  );
}
