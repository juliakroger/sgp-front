import React, { Component } from 'react';
import {BrowserRouter,Switch,Route } from "react-router-dom";
import InstitutionHomePage from './InstitutionHomePage';
import Login from './Login';
import StudentHomePage from './StudentHomePage';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
              <Route path="/home" component={InstitutionHomePage}/>
              <Route path="/schedule" component={StudentHomePage}/>
              <Route path="/" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
