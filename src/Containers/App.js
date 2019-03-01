import React, { Component } from 'react';
import {BrowserRouter,Switch,Route } from "react-router-dom";
import Home from  './Home';
import Login from './Login';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
