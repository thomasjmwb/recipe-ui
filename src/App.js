import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Mixer</h1>
        </header>
        <h2>todo:</h2>
        <ul>
          <li>routing - implement basic routing</li>
          <li>routing - implement recipes route</li>
          <li>routing - implement ingredients route</li>
          <li>routing - implement mixer route, (generate recipe lists for week)</li>
          <li>deployment - implement deployment strategy</li>
        </ul>
      </div>
    );
  }
}

export default App;
