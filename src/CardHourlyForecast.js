import React from 'react';
import CardHourlyChild from './CardHourlyChild.js';

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
                console.log('12 hour forecast')
                console.log(this.state.forecast12hr)
                //let time = this.get12hrTime();
                const hourlyChildren = this.state.forecast12hr.map(
                    element => {
                        let time = this.get12hrTime(element.startTime)
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

    /**
     * With the given datetime string, convert to Date object 
     * to get the hours (24hr format). From the 24 hour format, convert
     * to 12 hour format.
     * @param {String} time 
     */
    get12hrTime(time) {
        let timeHour = new Date(time).getHours();
        if (12 <= timeHour) {
            timeHour = timeHour % 12;
            timeHour = timeHour.toString() + ' PM';
        }
        else {
            if (0 === timeHour) { timeHour = 12 }
            timeHour = timeHour.toString() + ' AM';
        }
        return timeHour;
    }

    render() {
        return (
            <div class="flex-container">
                {this.state.hourlyForecast}
            </div>
        )
    }
}
export default CardHourlyForecast
