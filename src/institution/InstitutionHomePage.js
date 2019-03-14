import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Candidate from './pages/Candidate';
import Place from './pages/Place';

class InstitutionHomePage extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <div className="main">
                    <Navbar />
                    <Route exact path={'/home/'} component={Home}/>
                    <Route path={`/home/place`} component={Place}/>
                    <Route path={`/home/candidate`} component={Candidate}/>

                </div>
            </div>
        );
    }
}

export default InstitutionHomePage;
