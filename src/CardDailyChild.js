import React from 'react';

function CardDailyChild(props) {
    let styles = null
    let forecastStyle = null
    let isDay = props.isDayTime

    if (isDay) {
        styles = { backgroundColor: '#00FF9F' }
        forecastStyle = { color: '#888' }

    } else {
        styles = { backgroundColor: '#546bab', color: 'white' }
        forecastStyle = { color: '#ffff00' }
    }

    return (
        // <div className="weather-forecast">
        <div className="forecast-item" style={styles}>
            <div className="day">
                <h4>{props.time}</h4>
                <h6 style={forecastStyle}>{props.date}</h6>
            </div>
            <div className="forecast">
                <i className="wi wi-night-sleet"></i> {props.temp}&#8457;
                    <h6 style={forecastStyle}>{props.shortForecast}</h6>
            </div>
            {/* </div> */}
        </div>
    )
}

export default CardDailyChild