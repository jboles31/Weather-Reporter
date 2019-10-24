import React from 'react'
import { WiRain, WiSunrise, WiSunset } from 'react-icons/wi'

let convertFaren = (temp) => {
  return Math.round((((temp - 273.15) * 9)/ 5) + 32);
}

let convertTime = (time, morning) => {
  let date = new Date(time * 1000)
  let hours = morning ? date.getHours() : (date.getHours() - 12);
  let mins = '0' + date.getMinutes()
  let seconds = '0' + date.getSeconds()
  return hours + ':' + mins.substr(-2) + ':' + seconds.substr(-2);
}

const InfoDisplay = ( props ) => {

  let location = ''
  props.cities.map(city => {
    if (city.name === props.display) {
      location = city;
    }
  })

  return (
    <div className='info-display'>
      <div className='title'>{location.name}</div>
      <div className='information'>
        <div className='temp-display'>
          <div className='temp-main'>{convertFaren(location.main.temp)}</div>
          <div className='temp-min'>{convertFaren(location.main.temp_min)}</div>
          <div className='temp-max'>{convertFaren(location.main.temp_max)}</div>
        </div>
        <div className='sky'>
          <div className='sky-main'>{location.weather[0].main}</div>
          {/* <div><WiRain /></div> */}
          <div className='sky-description'>{location.weather[0].description}</div>
        </div>
        <div className='sun'>
          <div><WiSunrise /></div>
          <div className='sunrise'>{convertTime(location.sys.sunrise, true) + ' AM'}</div>
          <br></br>
          <div><WiSunset /></div>
          <div className='sunset'>{convertTime(location.sys.sunset, false) + ' PM'}</div>
        </div>
      </div>
    </div>
  )
}

export default InfoDisplay