import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './pages/LandingPage';
import About from './pages/About';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
