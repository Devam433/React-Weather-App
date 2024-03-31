import React from 'react'
import sunsetPng from "../assets/sunSet.png"
export const HourCrad = ({time,value}) => {
  return (
    <div className='hour-card-container'>
        <div className='hour-card'>
            <div className='hour-card-data'>
                <div className='hour-card-time' style={{fontSize:'16px', fontWeight:'500', color:'#445353'}}>{time}</div>
                <div className='hour-card-img'><img src={sunsetPng} alt="" /></div>
                <div className='hour-card-temperature' style={{fontSize:'21px', fontWeight:'500', color:'#2e3535'}}><p style={{display:'flex'}}>{value}<span style={{fontSize: '15px',fontWeight: '500',width:'16px',WebkitWritingMode:'vertical-rl'}}>o</span></p></div>
            </div>
        </div>
    </div>
  )
}
