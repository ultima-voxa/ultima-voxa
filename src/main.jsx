import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UltimaVoxaLanding from './UltimaVoxaLanding';
import Submit from './pages/submit';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UltimaVoxaLanding />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
