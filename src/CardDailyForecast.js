import React from 'react';

/*
TODO: break down the forecast-item into components,
so that each day is a component itself.

This component was copied over from CardHourlyForecast.js
*/

class CardDailyForecast extends React.Component {
    constructor() {
        super()
        this.state = {
            'forecastHourlyAll': null,
            'forecast12hr': null
        }
        this.noaaEndpoint = 'https://api.weather.gov/points/'
        this.coord = '34.052235,-118.243683'
    }

    componentDidMount() {
        this.getForecast()
    }

    /**
     * Get the forecast for the current coordinates
     */
    getForecast() {
        let url = this.noaaEndpoint + this.coord
        console.log(url)
        fetch(url).then(
            (response) => { return response.json() }
        ).then(
            (jsonObj) => {
                // get the endpoint to the hourly forecast
                let hourlyEndpoint = jsonObj.properties.forecastHourly
                this.getHourlyForecast(hourlyEndpoint)
            }
        )
    }

    getHourlyForecast(url) {
        fetch(url).then(
            (response) => { return response.json() }
        ).then(
            (jsonObj) => {
                let hourlyForecast = jsonObj.properties.periods
                let forecast12hr = hourlyForecast.slice(0, 12)
                this.setState({ forecast12hr: forecast12hr, forecastHourlyAll: hourlyForecast })
            }
        )
    }

    render() {
        console.log(this.state.forecast12hr)
        return (

            <div className="weather-forecast">
                <div className="forecast-item">
                    <div class="day">
                        <h4>Friday</h4>
                        <h6>Aug 7</h6>
                    </div>
                    <div class="forecast">
                        <i class="wi wi-night-sleet"></i> 70&#8457;
                    <h6>Partly Cloudy</h6>
                    </div>
                    {/* <div className="scrolling-wrapper">
                    <div className="flex-item">1</div>
                    <div className="flex-item">2</div>
                    <div className="flex-item">3</div>
                    <div className="flex-item">4</div>
                    <div className="flex-item">5</div>
                    <div className="flex-item">6</div>
                </div> */}
                </div>

                <div class="forecast-item">
                    <div class="day">
                        <h4>Saturday</h4>
                        <h6>Aug 7</h6>
                    </div>
                    <div class="forecast">
                        <i class="wi wi-night-sleet"></i> 72&#8457;
                    <h6>Sunny</h6>
                    </div>
                </div>
            </div>

        )
    }
}
export default CardDailyForecast
