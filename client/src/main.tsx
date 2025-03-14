import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n'; // Importa la configuración de i18next
import './index.css';
import { ScrollTrigger } from './lib/animations';

// Initialize scroll animation observer after the app is mounted
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Initialize scroll animations after application is loaded
window.addEventListener('load', () => {
  ScrollTrigger.setup();
});
