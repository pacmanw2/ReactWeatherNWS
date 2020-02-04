import React from 'react';
import Chart from "chart.js"
import CardHourlyChild from './CardHourlyChild.js';
import { get12hrTime } from './weatherUtils.js'

class CardHourlyForecast extends React.Component {
    constructor() {
        super()
        this.state = {
            'forecastHourlyAll': null,
            'forecast12hr': null,
            'hourlyForecast': null
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
                //console.log('12 hour forecast')
                //console.log(this.state.forecast12hr)
                //let time = this.get12hrTime();
                const hourlyChildren = this.state.forecast12hr.map(
                    element => {
                        let time = get12hrTime(element.startTime)
                        //console.log("the time is " + time)
                        return <CardHourlyChild
                            key={element.number}
                            time={time}
                            temp={element.temperature}
                            shortForecast={element.shortForecast}
                        />
                    }
                )

                console.log(hourlyChildren)
                this.setState({ hourlyForecast: hourlyChildren })
            }
        )
    }

    render() {
        return (
            <div className="flex-container">
                {this.state.hourlyForecast}
            </div>
        )
    }
}
export default CardHourlyForecast
