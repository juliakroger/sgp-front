import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
          <Sidebar/>
          <div className="main">
                <Navbar />
                <p>content</p>
          </div>
      </div>
    );
  }
}

export default App;
