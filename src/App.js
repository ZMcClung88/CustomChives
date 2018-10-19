import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import JumbotronComponent from './components/JumbotronComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronComponent />
      </div>
    );
  }
}

export default App;
