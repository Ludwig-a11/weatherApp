import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'



const WeatherCard = () => {

    const [obj, setObj] = useState()
    const [celcius, setCelcius] = useState()
    let lon , lat
       
  
  const getLatLon =() => {

    const success = pos => {
      console.log(pos.coords);
      lon=pos.coords.longitude
      lat=pos.coords.latitude
      setObj({lat,lon})
    }

    navigator.geolocation.getCurrentPosition(success)
  }

  const API_KEY = `6072ddb45c0763b77abd73da957d6396`

  useEffect (() => {
    if (obj !== undefined){
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${obj?.lat}&lon=${obj?.lon}&appid=${API_KEY}`
      axios.get(url)
        .then(res => setObj(res.data))
        .catch(err => (err))
    }
  }, [obj])

  
    
  const click = () => {
    if(celcius === (obj?.main?.temp -273.15)){
    setCelcius(((obj?.main?.temp -273.15)*9/5)+32 )
    } else {
    setCelcius(((obj?.main?.temp -273.15)).toFixed(1))
    }
    
    }

  return (
    <div className='weather-card'>
        
        
        <h1>WeatherApp</h1>
        <div className='weather-info'>
            <h3>City: {obj?.name}, Méx</h3>
            <ul>
                <li><b>Weather:</b> {obj?.weather?.[0]?.description} </li>
                <li><b>Clouds:</b> {obj?.clouds?.all} %</li>
                <li className='temp'><b>Temperature:  </b> {obj?.main?.temp}</li>
            </ul>
        </div>
       
        <button className='button'onClick={click}>Degrees °F/C</button>
        <button className='get-location-btn' onClick={getLatLon}>Get Location</button>
    </div>
  )
}

export default WeatherCard