import React from 'react';
import '../index.css';
import Output from './Output';

export default function Calculator() {
  return (
    <div className="calc-grid">
      <Output />
      <button className="clear" type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button className="operator" type="button">/</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button className="operator" type="button">x</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button className="operator" type="button">-</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button className="operator" type="button">+</button>
      <button className="zero" type="button">0</button>
      <button type="button">.</button>
      <button className="operator" type="button">=</button>
    </div>
  );
}
