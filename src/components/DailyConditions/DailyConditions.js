import React from 'react';
import classes from './DailyConditions.module.css';


const dailyConditions = (props) => {
  return (
    <div className={classes.Wrapper}>

      {props.error && <small className={classes.Small}>Please enter a valid city.</small>}

      {props.loading && <div className={classes.Loader} />}

      {props.responseObj.cod === 200 ?
        <div>
           <div>
           <img src={`https://openweathermap.org/img/wn/${props.responseObj.weather[0].icon}@2x.png`}/>
           </div>
          <p>
            <strong>{props.responseObj.name}</strong>
          </p>
          <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
          <p><strong>High: {Math.round(props.responseObj.main.temp_max)}</strong> / Low: {Math.round(props.responseObj.main.temp_min)}</p>
        </div>
      : null
      }
    </div>
  )
}

export default dailyConditions;
