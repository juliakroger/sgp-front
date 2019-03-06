import React, { Component } from 'react';
import Sidebar from '../Components/institution/Sidebar';
import Navbar from '../Components/institution/Navbar';
import Wrapper from '../Components/institution/Wrapper';
import { Auth } from 'aws-amplify';

class Home extends Component {
    componentWillMount() {
        Auth.currentAuthenticatedUser({
            bypassCache: false })
            .then(user => console.log(user))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Sidebar/>
                <div className="main">
                    <Navbar />
                    <Wrapper />
                </div>
            </div>
        );
    }
}

export default Home;
