import React from 'react'
import "./App.css"
import { Navbar } from './components/Navbar'
import { WeatherStat } from './components/WeatherStat'
// import getCurrentWeatherData from "./API/WeatherVisualCrossing"
import icon from './components/WeatherIcon'
import { useState } from "react"
// import getGeocodingData from './Utils/geocoding' 

const App = () => {

  const [weatherData,setWeatherData] = useState(null);
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [currentAddress,setCurrentAddress] = useState(null);;

  console.log(currentAddress)

  function getWeatherIcon (conditions) {
   return icon[conditions] || 'N/A'
  }
  function getSunriseTime() {
    if(weatherData) {
    const locationKey = Object.keys(weatherData.locations)[0];
    const dateTimeStr = weatherData.locations[locationKey].currentConditions.sunrise;
    const dateTime = new Date(dateTimeStr);
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    return `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
    }
  }
  function getSunsetTime() {
    if(weatherData) {
    const locationKey = Object.keys(weatherData.locations)[0];
    const dateTimeStr = weatherData.locations[locationKey].currentConditions.sunset;
    const dateTime = new Date(dateTimeStr);
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    return `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
    }
  }
  return (
    <div>
      <Navbar 
        setWeatherData={setWeatherData}
        setCurrentWeatherData={setCurrentWeatherData}
        setCurrentAddress={setCurrentAddress}
      />
      <WeatherStat 
        weatherData={weatherData}
        currentWeatherData={currentWeatherData}
        currentAddress={currentAddress}
        setWeatherData={setWeatherData}
        setCurrentWeatherData={setCurrentWeatherData}
        setCurrentAddress={setCurrentAddress}
        getWeatherIcon={getWeatherIcon}
        getSunriseTime={getSunriseTime}
        getSunsetTime={getSunsetTime}
      />
    </div>
  )
}
export default App