import React, { createContext, useContext, useReducer } from 'react';
import { loadState, saveState } from './state';
import { SECTIONS, ACTIONS, STATUS } from './constants';

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
  let todo;
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
    case ACTIONS.ADD_TODO:
      let id = Math.random();
      saveState('todo', [
        ...state.todo,
        { id, content: action.value, status: STATUS.TO_DO },
      ]);
      return {
        ...state,
        todo: [
          ...state.todo,
          { id, content: action.value, status: STATUS.TO_DO },
        ],
      };
    case ACTIONS.CLEAN:
      saveState('todo', []);
      return {
        ...state,
        todo: [],
      };
    case ACTIONS.DELETE_TODO:
      todo = state.todo.filter((el) => el.id !== action.value);
      saveState('todo', todo);
      return {
        ...state,
        todo,
      };
    case ACTIONS.MOVE_TO_IN_PROGRESS:
      todo = state.todo.map((el) =>
        el.id !== action.value ? el : { ...el, status: STATUS.IN_PROGRESS }
      );
      saveState('todo', todo);
      return {
        ...state,
        todo,
      };
    case ACTIONS.MOVE_TO_TO_DO:
      todo = state.todo.map((el) =>
        el.id !== action.value ? el : { ...el, status: STATUS.TO_DO }
      );
      saveState('todo', todo);
      return {
        ...state,
        todo,
      };
    case ACTIONS.MOVE_TO_DONE:
      todo = state.todo.map((el) =>
        el.id !== action.value ? el : { ...el, status: STATUS.DONE }
      );
      saveState('todo', todo);
      return {
        ...state,
        todo,
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
