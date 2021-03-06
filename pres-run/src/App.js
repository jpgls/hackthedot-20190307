import React, { Component } from 'react';
import './App.css';
import Bracket from './Bracket';
import OnBoard from './components/Onboarding.jsx';
import Results from "./components/Results.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      onboard: false
    }
  }

  toggleModal() {
    this.setState({onboard: !this.state.onboard})
  }

  render() {
    return (
      <div className="App">
        {this.state.onboard === false ? <OnBoard toggle={this.toggleModal.bind(this)}/> : <Results/> }
        <Bracket />
      </div>
    );
  }
}

export default App;
