import React, { Component } from "react";
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Logo from "./components/Logo/Logo";
import Home from "./components/Home/Home";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import WeeklyForecast from "./components/WeeklyForecast/WeeklyForecast";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
        <header className="App-header">
          <Logo />
          <h1>Weather App</h1>
        </header>
          <nav>
            <div className="FlexContainer">
            <li><NavLink to="/Home">Home</NavLink></li>
            <li><NavLink to="/DailyForecast">Current</NavLink></li>
            <li><NavLink to="/WeeklyForecast">Five-Day</NavLink></li>
            </div>
          </nav>
          <main>
            <Route path="/Home" component={Home}/>
            <Route path="/DailyForecast" component={DailyForecast}/>
            <Route path="/WeeklyForecast" component={WeeklyForecast}/>
          </main>
          <footer>
            App created by Ashleigh Alley
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
