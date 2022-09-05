import React, { useState } from 'react';
import './Category.css';

export default function Category() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div
      className={`menu-hamburger ${isActive ? 'open' : ''}`}
      onClick={toggleClass}
    >
      <div class="icon-left"></div>
      <div class="icon-right"></div>
    </div>
  );
}
