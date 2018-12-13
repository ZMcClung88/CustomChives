import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import JumbotronComponent from './components/JumbotronComponent';
import NavbarComponent from './components/NavbarComponent';
import Bio from './components/BioComponent';
import BandMates from './components/BandMatesComponent';
import LiveDatesComponent from './components/DatesComponent';
import SongComponent from './components/SongComponent';

import img1 from './media/albumart1.jpeg';
import img2 from './media/albumart2.jpeg';
import img3 from './media/albumart3.jpeg';
import img4 from './media/albumart4.jpeg';
import img5 from './media/albumart5.jpeg';
import img6 from './media/albumart6.jpeg';

import song1 from './media/song.mp3';
import song2 from './media/05 Opus (Final Master).wav';

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
            // border: '2px solid green',
            display: 'flex',
            justifyContent: 'space-around'
          }}
        >
          <div
            style={{
              // border: '1px solid red',
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'center',
              width: '45%'
            }}
          >
            <Bio />
            <BandMates />
            <LiveDatesComponent />
          </div>
          <div style={{ border: '1px solid red', width: '45%' }}>
            <SongComponent img={img1} songUrl={song2} playing />
            <SongComponent img={img2} />
            <SongComponent img={img3} />
            <SongComponent img={img4} />
            <SongComponent img={img5} />
            <SongComponent img={img6} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
