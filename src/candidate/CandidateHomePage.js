import React, {Component} from 'react';
import Header from './components/Header';
import Dashboard from "./components/Dashboard";


class CandidateHomePage extends Component {

  render() {
    return (
        <div>
          <Header/>
          <Dashboard/>
        </div>
    );
  };
};

export default CandidateHomePage;