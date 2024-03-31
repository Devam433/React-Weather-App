import React from 'react'
import "./App.css"
import { Navbar } from './components/Navbar'
import { WeatherStat } from './components/WeatherStat'

const App = () => {
  return (
    <div>
      <Navbar />
      <WeatherStat />
    </div>
  )
}
export default App