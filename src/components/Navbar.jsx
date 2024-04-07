import React, { useEffect, useState } from 'react'
import './navbar.css'
import getSearchedWeatherData from "../API/WeatherVisualCrossingSearch"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export const Navbar = ({setWeatherData,setCurrentWeatherData}) => {

  const [SearchData,setSearchData] = useState('');

  function handleOnchange(e) {
    const {value} = e.target;
    setSearchData(value);
  }
  function handleOnSumbitSearch(e) {
    e.preventDefault();
  } 

  useEffect(()=>{
    console.log('Search useeffect')
    async function fetchdata() {
      try{
        const visualCrossingAPI = await getSearchedWeatherData();
        const response = await visualCrossingAPI.get('',{
          params:{
            locations:SearchData,
          }
        });
        setWeatherData(response.data);
        console.log(response);
      } catch(error){
        console.log(error);
      }
    }
    if(SearchData!=='') {
      fetchdata();
    }
  },[SearchData])
  return (
    <div className='header--conatiner'>
        <header>
            <div className='search-bar-container'>
                <ul className='sreach-bar-items-container'>
                    <li className='search-icon-container'><FontAwesomeIcon icon={faMagnifyingGlass}/></li>
                    <li className='input-container'>
                      <form action="" onSubmit={handleOnSumbitSearch}>
                        <input 
                          type="text" 
                          placeholder='Search your address'
                          value={SearchData}
                          onChange={handleOnchange}
                          />
                      </form>
                    </li>
                    <li className='cross-mark-container'><FontAwesomeIcon icon={faCircleXmark} size="lg"/></li>
                </ul>
            </div>
            <div className='light-dark-mode-control-container'>
              <button className='light-dark-mode-btn'>
                <FontAwesomeIcon icon={faGear} size="xl" />
              </button>
            </div>
        </header>
    </div>
  )
}
