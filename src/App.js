import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import JumbotronComponent from './components/JumbotronComponent';
import NavbarComponent from './components/NavbarComponent';
import Bio from './components/BioComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronComponent />
        <NavbarComponent />
        <div style={{ width: '70%', marginLeft: '15%', border: '2px solid green', display: 'flex' }}>
          <div style={{ padding: '20px' }}>
            <Bio />
          </div>
          <div style={{ padding: '20px' }}>
            <Bio />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
