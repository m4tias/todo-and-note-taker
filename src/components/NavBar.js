import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faList,
  faCogs,
  faStickyNote,
} from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <button className="nav-bar__button">
        <FontAwesomeIcon icon={faList} color="#E5E5E5" />
      </button>
      <button className="nav-bar__button">
        <FontAwesomeIcon icon={faStickyNote} color="#E5E5E5" />
      </button>
      <button className="nav-bar__button">
        <FontAwesomeIcon icon={faCogs} color="#E5E5E5" />
      </button>
    </div>
  );
}
