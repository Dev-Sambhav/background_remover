import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './pages/LandingPage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render( 
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
