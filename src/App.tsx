import React from 'react';
import './App.scss';
import NasaInfo from './NasaInfo';
import { Component1 } from './Component1';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header } from "./Header";
import { RoverSelector } from "./RoverSelector";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/clicker">
            <p> </p>
            <Component1 />
          </Route>
          <Route path="/rovers">
            <p></p>
            <RoverSelector />
          </Route>
          <Route path="/">
            <NasaInfo />
          </Route>
          
        </Switch>
      </Router>

    </div>);
}

export default App;
