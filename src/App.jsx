import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import GetLocationBar from './components/GetLocationBar'
import WeatherCard from './components/WeatherCard'

function App() {

  const [obj, setObj] = useState()
  const [celcius, setCelcius] = useState()
  const [temperature, setTemperature] = useState()
 
  let lon, lat


  const getLatLon = () => {

    const success = pos => {
      console.log(pos.coords);
      lon = pos.coords.longitude
      lat = pos.coords.latitude
      setObj({ lat, lon })
    }

    navigator.geolocation.getCurrentPosition(success)
  }

  const API_KEY = `6072ddb45c0763b77abd73da957d6396`

  useEffect(() => {
    if (obj !== undefined) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${obj?.lat}&lon=${obj?.lon}&appid=${API_KEY}`
      axios.get(url)
        .then(res => setObj(res.data))
        .catch(err => (console.log(err)))
    }
  }, [obj])



  const click = () => {
    if (celcius === (obj?.main?.temp - 273.15)) {
      setCelcius(((obj?.main?.temp - 273.15) * 9 / 5) + 32)
    } else {
      setCelcius(((obj?.main?.temp - 273.15)).toFixed(1))
    }

  }


  console.log(obj);
 

  return (
    <div className="App">
      
      <GetLocationBar onClick={click} click={click} getLatLon={getLatLon} />
      <WeatherCard obj={obj} click={click}/>
      
    </div>
  )
}

export default App
