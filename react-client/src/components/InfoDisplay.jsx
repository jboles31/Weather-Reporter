import React from 'react'

let convertFaren = (temp) => {
  return Math.round((((temp - 273.15) * 9)/ 5) + 32);
}

let convertTime = (time) => {
  let date = new Date(time * 1000)
  let hours = date.getHours()
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
          <div className='sky-description'>{location.weather[0].description}</div>
        </div>
        <div className='sun'>
          <div className='sunrise'>{convertTime(location.sys.sunrise) + 'AM'}</div>
          <div className='sunset'>{convertTime(location.sys.sunset) + 'PM'}</div>
        </div>
      </div>
    </div>
  )
}

export default InfoDisplay