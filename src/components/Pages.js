import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

export default function Pages({ page, direction, className }) {
  return (
    <li className={className}><Link to={direction}>{page}</Link></li>
  );
}
