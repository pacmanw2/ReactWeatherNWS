import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import CardHourlyForecast from './CardHourlyForecast.js'
import Tab from './Tab.js'
import './CardHourlyForecast.css';
import './CardDailyForecast.js';
import CardDailyForecast from './CardDailyForecast';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      'city': null,
      'state': null
    }
  }



  render() {
    // const x = { backgroundColor: 'green' }

    return (
      <div className="App" >
        {/* <Tab /> */}
        <div class="banner">
          <Card />
          {/* <CardHourlyForecast />
          <CardDailyForecast /> */}
        </div>
        <CardHourlyForecast />
      </div>
    );
  }

}

export default App;
