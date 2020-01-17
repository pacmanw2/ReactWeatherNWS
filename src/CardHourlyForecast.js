import React from 'react';
import CardHourlyChild from './CardHourlyChild.js';

/*
TODO: break down the forecast-item into components,
so that each day is a component itself.
*/

class CardHourlyForecast extends React.Component {
    constructor() {
        super()
        this.state = {
            'forecastHourlyAll': null,
            'forecast12hr': null
        }
        this.noaaEndpoint = 'https://api.weather.gov/points/'
        // this.coord = '34.052235,-118.243683'
        this.coord = '47.658779,-117.426048'
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
            <div class="flex-container">
                <CardHourlyChild />
                <CardHourlyChild />
                <CardHourlyChild />
                <CardHourlyChild />
                <CardHourlyChild />
                <CardHourlyChild />
                <CardHourlyChild />
                <CardHourlyChild />
                <CardHourlyChild />
                <CardHourlyChild />
                <CardHourlyChild />
                <CardHourlyChild />
                <CardHourlyChild />
                <CardHourlyChild />
                <CardHourlyChild />
                <CardHourlyChild />
                <CardHourlyChild />
            </div>
        )
    }
}
export default CardHourlyForecast
