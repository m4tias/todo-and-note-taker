import React from 'react';
import Accordion from './Accordion';
import Item from './Item';
import { useAppState, useAppDispatcher } from '../AppContext';
import { STATUS, ACTIONS } from '../constants';

export default function TodoList() {
  let { todo } = useAppState();
  let dispatch = useAppDispatcher();

  let toDo = todo.filter(
      (e) => e.status === STATUS.TO_DO || e.status === STATUS.IN_PROGRESS
    ),
    done = todo.filter((e) => e.status === STATUS.DONE);

  return (
    <div className="todo_done_dolater-list">
      <Accordion title="TO DO" open>
        {toDo.map(({ content, id, status }) => (
          <Item key={id} id={id} status={status} toDo>
            {content}
          </Item>
        ))}
      </Accordion>
      <Accordion title="DONE">
        {done.map(({ content, id }) => (
          <Item key={id} id={id}>
            {content}
          </Item>
        ))}
      </Accordion>
      {!!todo.length && (
        <button
          type="button"
          className="todo_done_dolater-list__clearall"
          onClick={() => {
            if (window.confirm('Delete all?'))
              dispatch({
                type: ACTIONS.CLEAN,
              });
          }}
        >
          CLEAN
        </button>
      )}
    </div>
  );
}
