import React from 'react';
import Pages from './Pages';
import '../index.css';

export default function Navbar() {
  return (
    <div className="nav_bar">
      <h1 className="header">Math Magicians</h1>
      <ul className="links">
        <Pages className="my-home" page="Home" direction="/" />
        <Pages className="my-calc" page="Calculator" direction="/calculator" />
        <Pages className="my-quote" page="Quote" direction="/quote" />
      </ul>
    </div>
  );
}
