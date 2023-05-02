import React from 'react';
import Navbar from './Navbar';
import Api from './Api';

export default function QuotePage() {
  return (
    <div className="page">
      <Navbar />
      <div className="quote_page">
        <Api />
      </div>

    </div>
  );
}
