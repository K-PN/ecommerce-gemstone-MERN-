import './Cart.css';
import React, { useState } from 'react';

export default function Cart() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div
      className={`mini-cart ${isActive ? 'open' : ''}`}
      onClick={toggleClass}
    ></div>
  );
}
