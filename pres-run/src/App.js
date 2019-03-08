import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bracket from './Bracket';
import presidents from 'data/presidents';

class App extends Component {
  
  render() {
    return (
      <div>
        <Bracket />
      </div>
    );
  }
}

export default App;
