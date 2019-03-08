import React, { Component } from 'react';
import {BrowserRouter,Switch,Route } from "react-router-dom";
import InstitutionHomePage from './institution/InstitutionHomePage';
import Login from './login/Login';
import CandidateHomePage from './candidate/CandidateHomePage';

class App extends Component {
  render() {
    return (
            <BrowserRouter>
                <Switch>
                  <Route path="/home" component={InstitutionHomePage}/>
                  <Route path="/schedule" component={CandidateHomePage}/>
                  <Route path="/" component={Login}/>
                </Switch>
            </BrowserRouter>
    );
  }
}

export default App;
