import React from 'react';
import classes from './DayCard.module.css';

var moment = require('moment');

const DayCard = ({ reading, degreeType }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const fahrenheit = Math.round(reading.main.temp * 9/5 - 459.67)
  const celsius = Math.round((fahrenheit - 32) * 5/9)
  const tempHigh = Math.round(reading.main.temp_max * 9/5 - 459.67)
  const tempLow = Math.round(reading.main.temp_min * 9/5 - 459.67)


  return (
    <div className={classes.Wrapper}>
        <p><strong>{moment(newDate).format('dddd')}</strong> / {moment(newDate).format('MMMM Do')}</p>
        <img src={`https://openweathermap.org/img/wn/${reading.weather[0].icon}@2x.png`}/>
        <p><strong>{reading.weather[0].description}</strong></p>
        <h2>{degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</h2>
        <p><strong>{tempHigh}</strong> / {tempLow}</p>
    </div>
  )
}


export default DayCard;
