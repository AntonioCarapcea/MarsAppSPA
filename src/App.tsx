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
import { PictureOfTheDay } from "./PictureOfTheDay"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <p></p>
        <Switch>
          <Route path="/clicker">  
            <Component1 />
          </Route>

          <Route path="/rovers">
            <RoverSelector />
          </Route>

          <Route path="/pod">
            <PictureOfTheDay />
          </Route>

          <Route path="/">
            <NasaInfo />
          </Route>
          
        </Switch>
      </Router>

    </div>);
}

export default App;
