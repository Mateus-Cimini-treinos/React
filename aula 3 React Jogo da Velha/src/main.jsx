import React from 'react';
import ReactDOM from 'react-dom/client';

import Board from './Board.jsx';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
);