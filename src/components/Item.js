import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faPlay,
  faTrashAlt,
  faPause,
  faCopy,
} from '@fortawesome/free-solid-svg-icons';
import { STATUS, ACTIONS } from '../constants';
import { useAppDispatcher } from '../AppContext';

export default function Item({
  children,
  id,
  status,
  toDo = false,
  sticky = false,
}) {
  let dispatch = useAppDispatcher();

  return (
    <div className="todo_item">
      <div>{children}</div>
      <div className="todo_item__actions">
        {toDo && (
          <>
            <button
              className="todo_item__button"
              onClick={() =>
                dispatch({ type: ACTIONS.MOVE_TO_DONE, value: id })
              }
            >
              <FontAwesomeIcon icon={faCheck} color="#8fc0a9" />
            </button>
            <button
              className="todo_item__button"
              onClick={() =>
                dispatch({
                  type:
                    status === STATUS.TO_DO
                      ? ACTIONS.MOVE_TO_IN_PROGRESS
                      : ACTIONS.MOVE_TO_TO_DO,
                  value: id,
                })
              }
            >
              <FontAwesomeIcon
                icon={status === STATUS.TO_DO ? faPlay : faPause}
                color="#f7f879"
              />
            </button>
          </>
        )}
        {sticky && (
          <button
            className="todo_item__button"
            onClick={() => navigator.clipboard.writeText(children)}
          >
            <FontAwesomeIcon icon={faCopy} color="#ccc" />
          </button>
        )}
        <button
          className="todo_item__button"
          onClick={() =>
            dispatch({
              type: !sticky ? ACTIONS.DELETE_TODO : ACTIONS.DELETE_STICKY,
              value: id,
            })
          }
        >
          <FontAwesomeIcon icon={faTrashAlt} color="#ccc" />
        </button>
      </div>
    </div>
  );
}
