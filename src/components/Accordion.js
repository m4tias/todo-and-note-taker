import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

export default function Accordion({
  title,
  children,
  open: defaultOpen = true,
}) {
  let [open, setOpen] = useState(defaultOpen);
  return (
    <div className="accordion">
      <h2 onClick={() => setOpen((prev) => !prev)}>
        <span className="accordion__arrow"><FontAwesomeIcon icon={open && !!children.length ? faChevronDown : faChevronRight} /></span>
        <span className="accordion__title">{title}</span>
      </h2>
      {open && <div className="accordion__content">{children}</div>}
    </div>
  );
}
