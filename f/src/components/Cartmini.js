import { Cart } from 'react-bootstrap-icons';
import './Cartmini.css';
import React, { useState } from 'react';

export default function Cartmini() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div
      className={`mini-cart ${isActive ? 'open' + ' ' + 'active' : ''}`}
      onClick={toggleClass}
    >
      <div className="icon-cart">
        <div className="cart-line-1"></div>
        <div className="cart-line-2"></div>
        <div className="cart-line-3"></div>
        <div className="cart-wheel"></div>
      </div>
    </div>
  );
}
