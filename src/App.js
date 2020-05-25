import React from 'react';
import { useAppState } from './AppContext';
import { SECTIONS } from './constants';
import WelcomeInput from './components/WelcomeInput';
import NavBar from './components/NavBar';

let { WELCOME, TODO, STICKY, SETTINGS } = SECTIONS;

function App() {
  let { section } = useAppState();

  return (
    <>
      {section === WELCOME ? (
        <WelcomeInput />
      ) : (
        <>
          <NavBar />
          {(() => {
            switch (section) {
              case TODO:
                return <div />;
              case STICKY:
                return <div />;
              case SETTINGS:
                return <div />;
              default: /* silence */
            }
          })()}
        </>
      )}
    </>
  );
}

export default App;
