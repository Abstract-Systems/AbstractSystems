"use client"
import React, { useState } from "react";
import "./CaroselCardCss.scss";
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

const MAX_VISIBILITY = 3;

export const Carousel = ({ children }) => {
    const count = React.Children.count(children);
    const [active, setActive] = useState(Math.floor(count / 2));

    return (
        <div className='carousel-container'>
            <div className='carousel'>
                {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline /></button>}
                {React.Children.map(children, (child, i) => (
                    <div className='card-container' style={{
                        '--active': i === active ? 1 : 0,
                        '--offset': (active - i) / 3,
                        '--direction': Math.sign(active - i),
                        '--abs-offset': Math.abs(active - i) / 3,
                        'pointer-events': active === i ? 'auto' : 'none',
                        'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                        'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                    }}>
                        {child}
                    </div>
                ))}
                {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline /></button>}
            </div>
        </div>
    );
};
