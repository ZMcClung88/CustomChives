import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import JumbotronComponent from './components/JumbotronComponent';
import NavbarComponent from './components/NavbarComponent';
import Bio from './components/BioComponent';
import BandMates from './components/BandMatesComponent';
import LiveDatesComponent from './components/DatesComponent';
import SongComponent from './components/SongComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronComponent />
        <NavbarComponent />
        <div
          style={{
            width: '70%',
            marginLeft: '15%',
            border: '2px solid green',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div style={{ border: '1px solid red', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Bio />
            <BandMates />
            <LiveDatesComponent />
          </div>
          <div style={{ border: '1px solid red' }}>
            <Bio />
            <SongComponent />
            <SongComponent />
            <SongComponent />
            <SongComponent />
            <SongComponent />
            <SongComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
