import React, {useState} from 'react';
import WeeklyConditions from '../WeeklyConditions/WeeklyConditions';
import classes from './WeeklyForecast.module.css';
import DayCard from '../DayCard/DayCard';



const WeeklyForecast = () => {
     let [location, setLocation] = useState('');
     let [list, setList] = useState('');
     let [tempUnit, setTempUnit] = useState('imperial');
     let [responseObjs, setResponseObjs] = useState({});
     let [errors, setErrors] = useState(false);
     let [loadings, setLoadings] = useState(false);



   function getWeeklyForecast(e) {
     e.preventDefault();

      //if (location.length === 0) {
        //return setError(true);
     //}

     //Clear state.
     //setError(false);
     setResponseObjs({});

     //Loading should be true at the start of a function
      //setLoading(true);

     const uriEncodedLocation = encodeURIComponent(location);

     fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?temps=${tempUnit}&q=${uriEncodedLocation}`, {
       "method": "GET",
        "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY

        }
 })

    .then(responses => responses.json())
    .then(responses => {
        //if (responses.cod !== 200) {
          //throw new Error()
        //}
      setResponseObjs(responses);
        //Loading should be false when function is successful.
        //setLoading(false);

  })

    //.catch(err => {
      //setError(true);
      //Loading should be false when the function fails.
      //setLoading(false);
      //console.log(err.message);
    //});

   }


   return (
     <div>
         <h2>Find 5-Day Weather Conditions</h2>
         <form onSubmit={getWeeklyForecast}>
        {JSON.stringify(responseObjs)}
         <br/><br/>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="temps"
                        checked={tempUnit === "imperial"}
                        value="imperial"
                        onChange={(e) => setTempUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="temps"
                        checked={tempUnit === "metric"}
                        value="metric"
                        onChange={(e) => setTempUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <button className={classes.Button} type="submit">Get 5-Day Forecast</button>
            </form>
         <WeeklyConditions
            responseObjs = {responseObjs}
         //errors = {error}
         //loadings = {loading}
         />
     </div>
   )
}

export default WeeklyForecast;
