'use client'
import React, { useState } from "react";
import "./CaroselCardCss.scss";
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

const CARDS = 10;
const MAX_VISIBILITY = 3;

export const Carousel = ({ children }) => {
  const [active, setActive] = useState(0); // Changed the initial active index to 0
  const count = React.Children.count(children);

  const handleClickLeft = () => {
    setActive(prevActive => (prevActive === 0 ? count - 2 : prevActive - 2));
  };

  const handleClickRight = () => {
    setActive(prevActive => (prevActive + 2) % count);
  };

  return (
    <div className='carousel'>
      {count > 1 && ( // Render navigation buttons only if there are multiple cards
        <button className='nav left' onClick={handleClickLeft}>
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className='card-container'
          style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) > MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}
        >
          {child}
        </div>
      ))}
      {count > 1 && ( // Render navigation buttons only if there are multiple cards
        <button className='nav right' onClick={handleClickRight}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};
