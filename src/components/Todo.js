import React from 'react';
import Timer from './Timer';
import TodoAdd from './TodoAdd';
import ProgressBar from './ProgressBar';

export default function Todo() {
  return (
    <section className="todo-section section">
      <Timer />
      <ProgressBar />
      <TodoAdd />
    </section>
  );
}
