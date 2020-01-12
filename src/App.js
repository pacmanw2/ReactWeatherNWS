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

        <div class="container">
          <Card />
          <div class="item">Someting else</div>
          <div class="item">three</div>

        </div>
      </div>
    );
  }

}

export default App;
