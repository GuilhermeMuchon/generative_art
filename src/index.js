import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Sketch from './Sketch/Sketch';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/sketches/:sketchId" component={Sketch} />
    </Switch>
  </ Router>,
  document.getElementById('root')
);
