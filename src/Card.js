import React from 'react';
import './noaaApi.js'

class Card extends React.Component {
    constructor() {
        super()
        this.state = {
            'city': 'none',
            'state': 'none',
            'lastUpdated': 'none',
            'forecast': 'none'
        }
        this.noaaEndpoint = 'https://api.weather.gov/points/'
    }

    componentDidMount() {
        this.getLocationName()
    }

    getLocationName() {
        let coord = '34.052235,-118.243683'
        this.noaaEndpoint += coord

        fetch(this.noaaEndpoint).then(
            (response) => {
                return response.json()
            }
        ).then(
            (jsonObj) => {
                let city = jsonObj['properties']['relativeLocation']['properties']['city']
                let state = jsonObj['properties']['relativeLocation']['properties']['state']
                this.setState({ city: city, state: state })
                console.log(jsonObj)
                this.getForecast(jsonObj.properties.forecast)
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
                let updated = jsonObj.properties.updated
                let forecastPeriods = jsonObj.properties.periods
                this.setState({ lastUpdated: updated, forecast: forecastPeriods })
                console.log(forecastPeriods)
            }
        )
    }

    render() {
        //this.getForecast()
        return (
            <div>
                <h1>{this.state['city']}</h1>
                <h1>{this.state['state']}</h1>
                <h1>{this.state.forecast[0]['temperature']}</h1>
            </div>
        );
    }

}
export default Card;