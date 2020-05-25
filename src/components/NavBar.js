import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faList,
  faCogs,
  faStickyNote,
} from '@fortawesome/free-solid-svg-icons';
import { useAppDispatcher } from '../AppContext';
import { ACTIONS, SECTIONS } from '../constants';

export default function NavBar() {
  let dispatch = useAppDispatcher();

  let { TODO, STICKY, SETTINGS } = SECTIONS;

  return (
    <div className="nav-bar">
      <button
        className="nav-bar__button"
        onClick={() => dispatch({ type: ACTIONS.CHANGE_SECTION, value: TODO })}
      >
        <FontAwesomeIcon icon={faList} color="#E5E5E5" />
      </button>
      <button
        className="nav-bar__button"
        onClick={() =>
          dispatch({ type: ACTIONS.CHANGE_SECTION, value: STICKY })
        }
      >
        <FontAwesomeIcon icon={faStickyNote} color="#E5E5E5" />
      </button>
      <button
        className="nav-bar__button"
        onClick={() =>
          dispatch({ type: ACTIONS.CHANGE_SECTION, value: SETTINGS })
        }
      >
        <FontAwesomeIcon icon={faCogs} color="#E5E5E5" />
      </button>
    </div>
  );
}
