import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Wrapper from './Wrapper';
class App extends Component {
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

export default App;
