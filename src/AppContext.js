import React, { createContext, useContext, useReducer } from 'react';
import { loadState, saveState } from './state';
import { SECTIONS, ACTIONS } from './constants';

const AppCreatedContext = createContext();

export const useAppState = () => {
  return useContext(AppCreatedContext)[0];
};

export const useAppDispatcher = () => {
  return useContext(AppCreatedContext)[1];
};

/* state = {
  section: String,
  settings: {
    name: String,
    darkMode?
    notifications?
  },
  todo: [{ content: String, status: String }],
  sticky: [String]
}
*/

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_SECTION:
      saveState('section', action.value);
      return {
        ...state,
        section: action.value,
      };
    case ACTIONS.CHANGE_NAME:
      saveState('settings', {
        ...state.settings,
        name: action.value,
      });
      return {
        ...state,
        settings: {
          ...state.settings,
          name: action.value,
        },
      };
    default:
      return state;
  }
};

export default function AppContext({ children }) {
  let section = loadState('section');
  let { WELCOME } = SECTIONS;
  if (!section) section = WELCOME;
  let settings = loadState('settings');
  if (!settings) settings = { name: '', darkMode: true, notifications: false };
  let todo = loadState('todo');
  if (!todo) todo = [];
  let sticky = loadState('sticky');
  if (!sticky) sticky = [];

  let initialState = {
    section,
    settings,
    todo,
    sticky,
  };

  let value = useReducer(reducer, initialState);
  return (
    <AppCreatedContext.Provider value={value}>
      {children}
    </AppCreatedContext.Provider>
  );
}
