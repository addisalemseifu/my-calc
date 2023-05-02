import { Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from './components/HomePage';
import CalcPage from './components/CalcPage';
import QuotePage from './components/QuotePage';
import './index.css';

function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="calculator/" element={<CalcPage />} />
        <Route path="quote/" element={<QuotePage />} />
      </Routes>
    </div>
  );
}

export default App;
