import React, { useState } from 'react';
import { useAppDispatcher } from '../AppContext';
import { SECTIONS, ACTIONS } from '../constants';

export default function WelcomeInput() {
  let [inputName, setInputName] = useState('');
  let [error, setError] = useState(false);
  let dispatch = useAppDispatcher();

  function handleInputNameChange(e) {
    setInputName(e.target.value);
    if (e.target.value.length > 15) {
      setError('That name seems to be too long!');
    } else {
      setError(false);
    }
  }

  function submit(name) {
    dispatch({ type: ACTIONS.CHANGE_NAME, value: name });
    dispatch({ type: ACTIONS.CHANGE_SECTION, value: SECTIONS.TODO });
  }

  function submitName(e) {
    e.preventDefault();
    if (error) {
      return;
    }
    submit(inputName);
  }

  function submitEmptyName() {
    submit('');
  }

  return (
    <section className="welcome-page section">
      <div>
        <h1 className="welcome-page__title">Welcome!</h1>
      </div>
      <div className="welcome-page__subsection">
        <h2 className="welcome-page__subtitle">
          Let's start by getting your name in order to become friends!
        </h2>
        <form className="welcome-page__form" onSubmit={submitName}>
          <input
            className="welcome-page__input"
            placeholder="Name..."
            value={inputName}
            onChange={handleInputNameChange}
          />
          <button
            className="welcome-page__button welcome-page__button-accept"
            onClick={submitName}
          >
            Let's go!
          </button>
        </form>
        {error && <div className="welcome-page__error">{error}</div>}
      </div>
      <div className="welcome-page__noway_container">
        <button
          className="welcome-page__button welcome-page__button-noway"
          onClick={submitEmptyName}
        >
          No way!
        </button>
      </div>
    </section>
  );
}
