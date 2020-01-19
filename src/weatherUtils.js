/**
 * With the given datetime string, convert to Date object 
 * to get the hours (24hr format). From the 24 hour format, convert
 * to 12 hour format.
 * @param {String} time 
 */
export function get12hrTime(time) {
    let timeHour = new Date(time).getHours();
    console.log(timeHour)
    if (12 <= timeHour) {
        timeHour = timeHour % 12;
        if (0 === timeHour) {
            console.log('time is 0')
            timeHour = 12;
        }
        timeHour = timeHour.toString() + ' PM';
        console.log(timeHour)
    }
    else {
        if (0 === timeHour) {
            timeHour = 12
        }
        timeHour = timeHour.toString() + ' AM';
    }
    console.log(timeHour)
    return timeHour;
}

