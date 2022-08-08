


const WeatherCard = ({obj}) => {
 

  console.log(obj);
  

  return (
    <div className='weather-card'>
      
        <div className='weather-info'>
            <h2 className='weather-city'><i class="fa-solid fa-map-location-dot"></i> City: {obj?.name} {obj?.sys?.country}</h2>
            <ul>
                <li><i class="fa-solid fa-cloud-sun fa-lg"></i>  <b>Weather:</b> {obj?.weather?.[0]?.description} </li>
                <li><i class="fa-solid fa-cloud"></i>  <b>Clouds:</b> {obj?.clouds?.all} %</li>
                <li><i class="fa-solid fa-temperature-high"></i>  <b>Temperature:  </b> {obj?.main?.temp}</li>
                <li> <b>Humidity: </b>{obj?.main?.humidity} %</li>
                <li><i class="fa-solid fa-fish"></i>  <b>Sea Level: </b>{obj?.main?.sea_level} %</li>
                <li><i class="fa-solid fa-temperature-arrow-up"></i>  <b>Temp Max: </b>{obj?.main?.temp_max} %</li>
                <li><i class="fa-solid fa-temperature-arrow-down"></i>  <b>Temp Min: </b>{obj?.main?.temp_min} %</li>
            </ul>
        </div>
       
        
    </div>
  )
}

export default WeatherCard