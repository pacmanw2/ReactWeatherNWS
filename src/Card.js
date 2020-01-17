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
            'forecast24hr': null
        }
        this.noaaEndpoint = 'https://api.weather.gov/points/'
    }

    componentDidMount() {
        this.getLocationName()
    }



    /**
     * Get the City/State of the location.
     * Current location is hard coded to Vernon, California.
     */
    getLocationName() {
        // let coord = '34.052235,-118.243683'
        let coord = '47.658779,-117.426048'
        this.noaaEndpoint += coord

        fetch(this.noaaEndpoint).then(
            (response) => {
                return response.json()
            }
        ).then(
            (jsonObj) => {
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
            <div className="item">
                <div className="item-temp">
                    <h2 className="main-location">{this.state.city}, {this.state.state}</h2>
                    <p className="main-temp">{this.state.temp}&#8457;</p>

                    <h2 className="main-detailed">{this.state.detailedForecast}</h2>
                    <p className="main-updated">Last Update: {this.state.lastUpdated}</p>
                </div>

            </div>
        );
    }

}
export default Card;