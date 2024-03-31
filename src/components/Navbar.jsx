import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
export const Navbar = () => {
  return (
    <div className='header--conatiner'>
        <header>
            <div className='search-bar-container'>
                <ul className='sreach-bar-items-container'>
                    <li className='search-icon-container'><FontAwesomeIcon icon={faMagnifyingGlass}/></li>
                    <li className='input-container'><input type="text" placeholder='Search your location'/></li>
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
