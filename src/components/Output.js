import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Output({ total, next }) {
  return (
    <div className="output">
      <div className="result">
        <h1>{total}</h1>
      </div>

      <div className="text">
        <h3>{next}</h3>
      </div>
    </div>
  );
}
