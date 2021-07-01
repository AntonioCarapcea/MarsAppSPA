import React from 'react';
import logo from './logo.svg';
import './App.css';
import NasaInfo from './NasaInfo';
import { ClickCounter } from './ClickCounter';

function App() {
  return (<div className="App">
    <header className="App-header">
      <NasaInfo />
      <ClickCounter />
    </header>
  </div>);
}

export default App;
