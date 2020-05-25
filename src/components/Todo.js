import React from 'react';
import Timer from './Timer';
import TodoAdd from './TodoAdd';
import ProgressBar from './ProgressBar';
import TodoList from './TodoList';

export default function Todo() {
  return (
    <section className="todo-section section">
      <Timer />
      <ProgressBar />
      <TodoAdd />
      <TodoList />
    </section>
  );
}
