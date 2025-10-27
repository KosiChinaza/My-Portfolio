import React from 'react';
import './App.css';
import Portfolio from './pages/Portfolio';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
