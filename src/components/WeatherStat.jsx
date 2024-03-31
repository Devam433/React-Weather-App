import React from 'react'
import "./navbar.css"
import "./weatherStat.css"
import sunrisePng from "../assets/sunrise.png"
import sunsetPng from "../assets/sunSet.png"
import windPng from "../assets/wind.png"
import sunPng from "../assets/sun.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { WeatherDashboardCard } from './WeatherDashboardCard';
import { HourCrad } from './HourCrad';

export const WeatherStat = () => {
  const dashArr=[
  {tag:'Chances of rain',value:'30%',img:{}},
  {tag:'Wind',value:'30%',img:{}},
  {tag:'Sunrise',value:'30%',img:{sunrisePng}},
  {tag:'Sunset',value:'30%',img:{sunsetPng}},
  {tag:'UV Index',value:'30%',img:{}},
  {tag:'Pressure',value:'30%',img:{}},
  {tag:'Humidity',value:'30%',img:{}},
  {tag:'Gust',value:'30%',img:{windPng}}
];

  const hourArr=[{time:'5 AM',value:'26'},{time:'6 AM',value:'26'},{time:'7 AM',value:'26'},{time:'8 AM',value:'26'},{time:'9 AM',value:'27'},{time:'10 AM',value:'27'},{time:'11 Am',value:'27'},{time:'12 PM',value:'28'}]
  return (
    <div className='weather-stat-container'>
        <main>
            <div className="current-main-weather-stat-container">
                <div className='weather-stat-img-container' style={{width:'220px',height:'220px'}}>
                    <img src={sunPng} alt="" style={{width:'165px',padding:'20px'}}/>
                </div>
                <div className='weather-stat-temperature-container'>
                  <div style={{display:'flex', flexDirection:'column'}}>
                    <p className='temperature'>26<span style={{fontSize: '20px',fontWeight: '500'}}>o</span></p>
                        <div style={{fontSize:'20px'}}><p>clear skies, possible cyclone</p></div>
                  </div>
                        
                </div>
                <div className='weather-stat-additionaldata-container'>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <div className='min-temperature-container'>
                    <div className='minTemp-img'><FontAwesomeIcon icon={faArrowDown} /></div>
                    <div className='min-temperature-data'>
                      <h3 style={{fontSize:'16px', fontWeight:'500'}}>Min</h3>
                      <h4 style={{fontSize:'40px',fontWeight:'700',display:"flex"}}>20<span style={{fontSize: '20px',fontWeight: '500'}}>o</span></h4>
                    </div>
                  </div>
                  <div className='max-temperature-container'>
                      <div className='maxTemp-img'><FontAwesomeIcon icon={faArrowUp} /></div>
                      <div className='max-temperature-data'>
                        <h3 style={{fontSize:'16px', fontWeight:'500'}}>Min</h3>
                        <h4 style={{fontSize:'40px',fontWeight:'700',display:'flex'}}>20<span style={{fontSize: '20px',fontWeight: '500'}}>o</span></h4>
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
              {
                hourArr.map((obj)=>{
                  return <HourCrad key={crypto.randomUUID()} time={obj.time} value={obj.value} />
                })
              }
            </div>
        </main>
    </div>
  )
}
