import React from 'react';

class Card extends React.Component {
    constructor() {
        super()
        this.state = {
            'city': null,
            'state': null,
            'lastUpdated': null,
            'forecast': null,
            'forecastHourly': null,
            'temp': null,
            'detailedForecast': null,
            'forecast24hr': null,
            'latitude': '47.6588',
            'longitude': '-117.426'
        }
        this.noaaEndpoint = 'https://api.weather.gov/points/'
        this.setPosition = this.setPosition.bind(this);
    }

    componentDidMount() {
        this.getLocation();
        //this.getLocationName();
    }

    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.setPosition, this.showError);
          this.getLocationName();
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      }
      
    /**
     * Set the latitude and longitude.
     * It should be noted that React's setState is Async.
     * Hence the callback function inside of the setState function.
     * More details here: https://reactjs.org/docs/state-and-lifecycle.html
     * @param {*} position 
     */
    setPosition(position) {
        this.setState(
            {
                latitude: position.coords.latitude.toString(),
                longitude: position.coords.longitude.toString()
            }, () => { 
            this.getLocationName();
        });
    }

    showError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
        }
      }

    /**
     * Get the City/State of the location.
     * Default location is hard coded to Spokane, WA.
     */
    getLocationName() {
        let url = this.noaaEndpoint + this.state.latitude + ',' + this.state.longitude
        console.log(url)

        fetch(url).then(
            (response) => {
                return response.json()
            }
        ).then(
            (jsonObj) => {
                console.log(jsonObj)
                let city = jsonObj['properties']['relativeLocation']['properties']['city']
                let state = jsonObj['properties']['relativeLocation']['properties']['state']
                this.setState(
                    {
                        city: city,
                        state: state
                    }
                )
                console.log(jsonObj)
                this.getForecast(jsonObj.properties.forecast)
                let hourlyForecastEndpoint = jsonObj.properties.forecastHourly
                console.log(hourlyForecastEndpoint)
                //this.getHourlyForecast(hourlyForecastEndpoint)
            }
        )
    }

    /**
     * Get the forecast from NWS
     * @param {String} url 
     */
    getForecast(url) {
        fetch(url).then(
            (response) => {
                return response.json()
            }
        ).then(
            (jsonObj) => {
                let updated = new Date(jsonObj.properties.updated).toString()
                let forecastPeriods = jsonObj.properties.periods
                let temp = jsonObj.properties.periods[0].temperature
                let detailedForecast = jsonObj.properties.periods[0].detailedForecast

                this.setState({
                    lastUpdated: updated,
                    forecast: forecastPeriods,
                    temp: temp,
                    detailedForecast: detailedForecast
                })
                // console.log(forecastPeriods)

            }
        )
    }

    render() {
        //console.log(this.state.forecast)
        // const styles = { backgroundColor: '#fff1a6' }
        return (
            <div className="banner">
                <div className="item">
                    <div className="item-temp">
                        <h2 className="main-location">{this.state.city}, {this.state.state}</h2>
                        <p className="main-temp">{this.state.temp}&#8457;</p>

                        <h2 className="main-detailed">{this.state.detailedForecast}</h2>
                        <p className="main-updated">Last Update: {this.state.lastUpdated}</p>
                    </div>
                </div>
            </div>
        );
    }

}
export default Card;