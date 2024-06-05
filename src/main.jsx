import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card';
import Gameboard from './Gameboard';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header /> */}
    <Gameboard />
  </React.StrictMode>,
);
