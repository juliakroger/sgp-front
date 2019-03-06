import React, {Component} from 'react';
import Header from '../Components/candidate/Header';
import Dashboard from "../Components/candidate/Dashboard";
class StudentHomePage extends Component {
    render(){
        return (
            <div>
              <Header />
              <Dashboard/>
            </div>
        );
    };
};

export default StudentHomePage;