import React from 'react';
import classes from './WeeklyConditions.module.css';
import DayCard from '../DayCard/DayCard';


class WeeklyConditions extends React.Component {
  state = {
    fullData: [],
    dailyData: []
  }

  componentDidMount = () => {
    fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?q=detroit`, {
   "method": "GET",
   "headers": {
     "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
     "x-rapidapi-key": process.env.REACT_APP_API_KEY
   }
 })
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({
        fullData: data.list,
        dailyData: dailyData
      }, () => console.log(this.state))
    })
  }

  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
  }

  render() {
    return (
        <div>
          {this.formatDayCards()}
        </div>
    )
  }
}

export default WeeklyConditions;
