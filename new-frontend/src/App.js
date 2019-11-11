import React from 'react';
import './App.css';

import Routes from './routes';

// @ts-ignore
import logo from './assets/logo.svg'

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
