import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatcher } from '../AppContext';
import { ACTIONS } from '../constants';

export default function AddSticky() {
  let [stickyInput, setStickyInput] = useState('');
  let dispatch = useAppDispatcher();
  let submit = (e) => {
    e.preventDefault();
    if (stickyInput.trim().lenght > 0) {
      dispatch({
        type: ACTIONS.ADD_STICKY,
        value: stickyInput,
      });
      setStickyInput('');
    }
  };
  return (
    <form
      className="todo-section__add-form"
      onSubmit={submit}
      style={{ marginTop: '50px' }}
    >
      <input
        className="todo-section__input"
        placeholder="Add new sticky"
        value={stickyInput}
        onChange={(e) => setStickyInput(e.target.value)}
      />
      <button className="todo-section__add-button">
        <FontAwesomeIcon icon={faPlus} color="#E5E5E5" />
      </button>
    </form>
  );
}
