import React, { useEffect, useState } from 'react'
import "./navbar.css"
import "./weatherStat.css"
import sunrisePng from "../assets/sunrise.png"
import sunsetPng from "../assets/sunSet.png"
import windPng from "../assets/wind.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { WeatherDashboardCard } from './WeatherDashboardCard'
import { HourCrad } from './HourCrad'
import getCurrentWeatherData from "../API/WeatherVisualCrossing"
import icon from './WeatherIcon'

export const WeatherStat = () => {
  const [weatherData,setWeatherData] = useState(null);
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  console.log(currentWeatherData)

  function getWeatherIcon (conditions) {
   return icon[conditions] || 'N/A;'
  }
  function getSunriseTime() {
    if(weatherData) {
    const locationKey = Object.keys(weatherData.locations)[0];
    const dateTimeStr = weatherData.locations[locationKey].currentConditions.sunrise;
    const dateTime = new Date(dateTimeStr)
    const hours = dateTime.getHours()
    const minutes = dateTime.getMinutes()
    return `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
    }
  }
  function getSunsetTime() {
    if(weatherData) {
    const locationKey = Object.keys(weatherData.locations)[0];
    const dateTimeStr = weatherData.locations[locationKey].currentConditions.sunset;
    const dateTime = new Date(dateTimeStr)
    const hours = dateTime.getHours()
    const minutes = dateTime.getMinutes()
    return `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
    }
  }

  const dashArr=[
  {tag:'Chances of rain',value:currentWeatherData.pop || currentWeatherData.pop==0  ? currentWeatherData.pop+' %' : 'fetching...',img:{}},
  {tag:'Wind',value:currentWeatherData.wspd ? currentWeatherData.wspd+' kph' : 'fetching...',img:{}},
  {tag:'Sunrise',value:getSunriseTime()??'fetching...',img:{sunrisePng}},
  {tag:'Sunset',value:getSunsetTime()??'fetching...',img:{sunsetPng}},
  {tag:'UV Index',value:currentWeatherData.uvindex ?? 'fetching...',img:{}},
  {tag:'Sea Level Pressure',value:currentWeatherData.sealevelpressure ? currentWeatherData.sealevelpressure+' mb' : 'fetching...',img:{}},
  {tag:'Humidity',value:currentWeatherData.humidity ?? 'fetching...',img:{}},
  {tag:'Gust',value:currentWeatherData.wgust ?? 'fetching...',img:{windPng}}
];

// const hourArr=[{time:'5 AM',value:'26'},{time:'6 AM',value:'26'},{time:'7 AM',value:'26'},{time:'8 AM',value:'26'},{time:'9 AM',value:'27'},{time:'10 AM',value:'27'},{time:'11 Am',value:'27'},{time:'12 PM',value:'28'}]

  async function getAllWeatherData() {
    try{
      console.log('inside getAllWeatherData')
      const openWeatherApi = await getCurrentWeatherData();
      const response = await openWeatherApi.get();
      setWeatherData(response.data); 
    }catch(error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if(weatherData) {
      console.log(weatherData)
      const locationKey = Object.keys(weatherData.locations)[0];
      setCurrentWeatherData(weatherData.locations[locationKey].values[0]);
    }
  },[weatherData])

  useEffect(()=>{
    console.log('useEffectRun.')
    getAllWeatherData();
  },[])

  return (
    <div className='weather-stat-container'>
        <main>
            <div className="current-main-weather-stat-container">
                <div className='weather-stat-img-container' style={{width:'220px',height:'220px'}}>
                    <img src={getWeatherIcon(currentWeatherData ? currentWeatherData.conditions : "") ?? ''} alt="" style={{width:'165px',padding:'20px'}}/>
                </div>
                <div className='weather-stat-temperature-container'>
                  <div style={{display:'flex', flexDirection:'column'}}>
                    <p className='temperature'>{currentWeatherData ? currentWeatherData.temp : ''}<span style={{fontSize: '20px',fontWeight: '500'}}>o</span></p>
                        <div style={{fontSize:'20px'}}><p>{currentWeatherData ? currentWeatherData.conditions : ""}</p></div>
                  </div>
                        
                </div>
                <div className='weather-stat-additionaldata-container'>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <div className='min-temperature-container'>
                    <div className='minTemp-img'><FontAwesomeIcon icon={faArrowDown} /></div>
                    <div className='min-temperature-data'>
                      <h3 style={{fontSize:'16px', fontWeight:'500'}}>Min</h3>
                      <h4 style={{fontSize:'40px',fontWeight:'700',display:"flex"}}>{currentWeatherData ? currentWeatherData.maxt : ''}<span style={{fontSize: '20px',fontWeight: '500'}}>o</span></h4>
                    </div>
                  </div>
                  <div className='max-temperature-container'>
                      <div className='maxTemp-img'><FontAwesomeIcon icon={faArrowUp} /></div>
                      <div className='max-temperature-data'>
                        <h3 style={{fontSize:'16px', fontWeight:'500'}}>Min</h3>
                        <h4 style={{fontSize:'40px',fontWeight:'700',display:'flex'}}>{currentWeatherData ? currentWeatherData.mint : ''}<span style={{fontSize: '20px',fontWeight: '500'}}>o</span></h4>
                    </div>
                  </div>
                </div>
                  
                <div style={{alignSelf:'end',fontSize:'20px'}}><p style={{display:'flex',color:'orange'}}>Feels like 25<span style={{fontSize: '20px',fontWeight: '500',WebkitWritingMode:"vertical-rl",fontSize:'13px', width:'15px'}}>o</span></p></div>
                </div>
            </div>
            <div className='weather-dashboard-container'>
              {dashArr.map((obj)=>{
                return <WeatherDashboardCard key={crypto.randomUUID()} weatherTag={obj.tag} weatherValue={obj.value} img={obj.img}/>
              })}
            </div>
            <div className='hourly-weather-container'>
              {/* {
                hourArr.map((obj)=>{
                  return <HourCrad key={crypto.randomUUID()} time={obj.time} value={obj.value} />
                })
              } */}
            </div>
        </main>
    </div>
  )
}
