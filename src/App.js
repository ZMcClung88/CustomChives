import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import JumbotronComponent from './components/JumbotronComponent';
import NavbarComponent from './components/NavbarComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronComponent />
        <NavbarComponent />
      </div>
    );
  }
}

export default App;
