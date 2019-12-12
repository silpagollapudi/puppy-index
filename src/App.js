import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogList from './components/DogList';
import DogPics from './components/DogPics';

class App extends Component {
  render() {
    return (
      <div className="App">
       <DogList />
       <DogPics />
      </div>
    );
  }
}

export default App;

