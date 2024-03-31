import React from 'react'
import sunsetPng from "../assets/sunSet.png"
export const WeatherDashboardCard = ({weatherTag,weatherValue,img}) => {
  
  return (
    <div className='wearther-dash-card-container'>
        <div className='wearther-dash-card'>
            <div className='weather-dash-img'>
                <img src={img} alt=""/>
            </div>
            <div className='weather-dash-data'>
                <div className='weather-tag' style={{color: 'rgb(99, 119, 119)'}}><p>{weatherTag}</p></div>
                <div className='weather-value' style={{fontSize:'20px',fontWeight:'700'}}><p>{weatherValue}</p></div>
            </div>
        </div>
    </div>
  )
}
