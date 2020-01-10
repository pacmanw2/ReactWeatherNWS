import React from 'react';
import './noaaApi.js'

class Card extends React.Component {
    constructor() {
        super()
        this.state = {
            'city': 'None',
            'state': 'None',
            'lastUpdated': 'N/A'
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

    getForecast(url) {
        fetch(url).then(
            (response) => {
                return response.json()
            }
        ).then(
            (jsonObj) => {
                let updated = jsonObj.properties.updated
                this.setState({ lastUpdated: updated })
                console.log(updated)
            }
        )
    }

    render() {
        //this.getForecast()
        return (
            <div>
                <h1>{this.state['city']}</h1>
                <h1>{this.state['state']}</h1>
                <h1>{this.state.lastUpdated}</h1>
            </div>
        );
    }

}
export default Card;