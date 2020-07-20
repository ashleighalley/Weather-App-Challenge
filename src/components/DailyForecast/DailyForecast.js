import React, {useState} from 'react';
import DailyConditions from '../DailyConditions/DailyConditions';
import classes from './DailyForecast.module.css';


const DailyForecast = () => {
     let [city, setCity] = useState('');
     let [unit, setUnit] = useState('imperial');
     let [responseObj, setResponseObj] = useState({});
     let [error, setError] = useState(false);
     let [loading, setLoading] = useState(false);

   function getDailyForecast(e) {
     e.preventDefault();

     if (city.length === 0) {
       return setError(true);
     }

     //Clear state.
     setError(false);
     setResponseObj({});

     // Loading should be true at the start of a function
     setLoading(true);

     const uriEncodedCity = encodeURIComponent(city);

     fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY

        }
 })

 .then(response => response.json())
 .then(response => {
     if (response.cod !== 200) {
       throw new Error()
     }
     setResponseObj(response);
     //Loading should be false when function is successful.
     setLoading(false);
 })
 .catch(err => {
   setError(true);
   //Loading should be false when the function fails.
   setLoading(false);
   console.log(err.message);
 });

   }

   return (
     <div>
         <h2>Find Current Weather Conditions</h2>
         <form onSubmit={getDailyForecast}>
         
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <button className={classes.Button} type="submit">Get Daily Forecast</button>
            </form>
         <DailyConditions
            responseObj = {responseObj}
            error = {error}
            loading = {loading}
         />
     </div>
   )
}
export default DailyForecast;
