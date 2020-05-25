import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatcher } from '../AppContext';
import { ACTIONS } from '../constants';

export default function TodoAdd() {
  let [todoInput, setTodoInput] = useState('');
  let dispatch = useAppDispatcher();
  let submit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      value: todoInput,
    });
    setTodoInput('');
  };
  return (
    <form className="todo-section__add-form" onSubmit={submit}>
      <input
        className="todo-section__input"
        placeholder="Add new item to do"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button className="todo-section__add-button">
        <FontAwesomeIcon icon={faPlus} color="#E5E5E5" />
      </button>
    </form>
  );
}
