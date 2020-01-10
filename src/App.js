import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Card from './Card.js';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      'city': null,
      'state': null,
    }
  }

  render() {
    return (
      <div className="App" >
        <Card />
      </div>
    );
  }
}

export default App;
