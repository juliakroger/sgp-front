import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Sidebar from '../Components/institution/Sidebar';
import Navbar from '../Components/institution/Navbar';
import Home from '../Components/institution/pages/Home';
import Candidate from '../Components/institution/pages/Candidate';


class InstitutionHomePage extends Component {

    render() {
        return (
            <div>
                <Sidebar/>
                <div className="main">
                    <Navbar />
                    <Candidate/>
                </div>
            </div>
        );
    }
}

export default InstitutionHomePage;
