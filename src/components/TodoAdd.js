import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function TodoAdd() {
  return (
    <form className="todo-section__add-form">
      <input className="todo-section__input" placeholder="Add new item to do" />
      <button className="todo-section__add-button">
          <FontAwesomeIcon icon={faPlus} color="#E5E5E5" />
      </button>
    </form>
  );
}
