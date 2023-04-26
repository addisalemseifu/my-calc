import React from 'react';
import '../index.css';

export default function Buttons({
  // eslint-disable-next-line react/prop-types
  symbol, className, handleClick,
}) {
  return (
    <button
      onClick={() => handleClick(symbol)}
      type="button"
      className={className}
    >
      {symbol}
    </button>
  );
}
