import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './ProfileLandingPage.jsx'; // Import the main component
import './index.css'; // Assuming Tailwind CSS setup requires this file

// Minimal CSS wrapper for Tailwind configuration
// File: src/index.css
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);