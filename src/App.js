import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Clock from './Components/Clock'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Impulse Tabs</h2>
        </div>
        <p className="App-intro">
          Happy Hacking!
        </p>

        <Clock />
      </div>
    );
  }
}

export default App;
