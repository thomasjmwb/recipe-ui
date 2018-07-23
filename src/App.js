import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/container/Nav';
import ItemList from './components/container/ItemList';
import {RecipeType} from './components/container/RecipeItem';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Mixer</h1>
          <Nav />
        </header>
        <h2>todo:</h2>
        <ul>
          <li>routing - implement basic routing</li>
          <li>routing - implement recipes route</li>
          <li>routing - implement ingredients route</li>
          <li>routing - implement mixer route, (generate recipe lists for week)</li>
          <li>deployment - implement deployment strategy</li>
        </ul>
        <h3>Recipes List</h3>
        <ItemList itemType={RecipeType} />
      </div>
    );
  }
}

export default App;
