import React from 'react';
import CardDailyChild from './CardDailyChild.js'
import { get12hrTime } from './weatherUtils.js'

/*
TODO: break down the forecast-item into components,
so that each day is a component itself.

This component was copied over from CardHourlyForecast.js
*/

class CardDailyForecast extends React.Component {
    constructor() {
        super()
        this.state = {
            'forecast': null
        }
        this.noaaEndpoint = 'https://api.weather.gov/points/'
        this.coord = '47.658779,-117.426048'
    }

    componentDidMount() {
        this.getCoordinateData()
    }

    /**
     * Get the forecast for the current coordinates
     */
    getCoordinateData() {
        let url = this.noaaEndpoint + this.coord
        console.log(url)
        fetch(url).then(
            (response) => { return response.json() }
        ).then(
            (jsonObj) => {
                // get the endpoint to the forecast
                let forecast = jsonObj.properties.forecast
                console.log('forecast')
                console.log(forecast)
                this.getForecast(forecast)
            }
        )
    }

    getForecast(url) {
        fetch(url).then(
            (response) => { return response.json() }
        ).then(
            (jsonObj) => {
                let forecastPeriods = jsonObj.properties.periods
                console.log(forecastPeriods)
                const forecastCards = forecastPeriods.map(
                    element => {
                        let time = get12hrTime(element.startTime)
                        let dateObj = new Date(element.startTime)
                        let day = dateObj.getDate()
                        let monthName = dateObj.toLocaleString('default', { month: 'short' })

                        return <CardDailyChild
                            key={element.number}
                            time={time}
                            date={monthName + ' ' + day}
                            temp={element.temperature}
                            shortForecast={element.shortForecast}
                            isDayTime={element.isDaytime}
                        />
                    }
                )

                console.log(forecastCards)
                this.setState({ forecast: forecastCards })
            }
        )
    }

    // /**
    //  * With the given datetime string, convert to Date object 
    //  * to get the hours (24hr format). From the 24 hour format, convert
    //  * to 12 hour format.
    //  * @param {String} time 
    //  */
    // get12hrTime(time) {
    //     let timeHour = new Date(time).getHours();
    //     console.log(timeHour)
    //     if (12 <= timeHour) {
    //         timeHour = timeHour % 12;
    //         if (0 === timeHour) {
    //             console.log('time is 0')
    //             timeHour = 12;
    //         }
    //         timeHour = timeHour.toString() + ' PM';
    //         console.log(timeHour)
    //     }
    //     else {
    //         if (0 === timeHour) {
    //             timeHour = 12
    //         }
    //         timeHour = timeHour.toString() + ' AM';
    //     }
    //     console.log(timeHour)
    //     return timeHour;
    // }

    render() {
        return (
            <div className="weather-forecast">
                {this.state.forecast}
            </div>
        )
    }
}
export default CardDailyForecast
