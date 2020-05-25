import React from 'react';
import { useAppState } from '../AppContext';

export default function NavBar() {
  let {
    settings: { name },
  } = useAppState();

  return (
    <div className="nav-bar">
      <h2 className="nav-bar__welcome-msg">{`Hello${name && `, ${name}`}!`}</h2>
      <button className="nav-bar__button"></button>
    </div>
  );
}
