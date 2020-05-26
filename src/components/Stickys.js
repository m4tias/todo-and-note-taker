import React from 'react';
import AddSticky from './AddSticky';
import Item from './Item';
import Timer from './Timer';
import { useAppState } from '../AppContext';

export default function Stickys() {
  let { sticky } = useAppState();
  return (
    <section className="section">
      <Timer />
      <AddSticky />
      <div style={{ width: '100%', marginTop: '15px' }}>
        {sticky.map(({ id, content }) => (
          <Item sticky key={id} id={id}>
            {content}
          </Item>
        ))}
      </div>
    </section>
  );
}
