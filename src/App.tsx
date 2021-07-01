import React from 'react';
import './App.scss';
import NasaInfo from './NasaInfo';
import { Component1 } from './Component1';
import { BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header } from "./Header";

function App() {
  return (<div className="App">
    <div className="App-header">
      <Router>
          <Switch>
            <Route path="/clicker">
              <Header />
              <p> </p>
              <Component1 />
            </Route>
            <Route path="/">
              <Header />
              <NasaInfo />
            </Route>
          </Switch>
      </Router>
      
    </div>
  </div>);
}

export default App;
