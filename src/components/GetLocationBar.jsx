



const GetLocationBar = ({click,getLatLon}) => {

 


  return (
    <div className='container-location'>
        <div>
            <h1 className='weather-title'>Weather App</h1>
            <button className='button'onClick={click}>Degrees °F/C</button>
            <button className='get-location-btn' onClick={getLatLon}>Get Location</button>
        </div>
    </div>     
  )
}

export default GetLocationBar
