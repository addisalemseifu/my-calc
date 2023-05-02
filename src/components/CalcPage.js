import React from 'react';
import Navbar from './Navbar';
import Calculator from './Calculator';

export default function CalcPage() {
  return (
    <div className="page">
      <Navbar />
      <div className="calc_container">
        <h2 className="sub_header">Lets do some math!</h2>
        <Calculator />
      </div>

    </div>
  );
}
