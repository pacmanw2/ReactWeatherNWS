import React from 'react';

function CardHourlyChild(props) {
    const fontSize = { fontSize: 14 }
    return (
        <div>
            <h1>{props.temp}</h1>
            <h1 style={fontSize}>{props.shortForecast}</h1>
            <h1 style={fontSize}>{props.time}</h1>
        </div>
    )
}

export default CardHourlyChild