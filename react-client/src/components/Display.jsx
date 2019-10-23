import React from 'react'
import { useState } from 'react'

let convertFaren = (temp) => {
  return Math.round((((temp - 273.15) * 9)/ 5) + 32);
}

const Display = ( props ) => {

  if (props.view === false) {
  
    let [search, updateSearch] = useState('')
    
    return (
      <div className='display'>
      <div className='greeting'>
        <i className="fa fa-globe"></i>
      </div>
      <div className='search'> 
        <input className='search-bar' type='search' onChange={(e) => updateSearch(e.target.value)}></input>
        <button type="submit" class="search-button" onClick={() => props.search(search)}>
        <i className="fa fa-search"></i>
     </button>
      </div>
    </div>
    )
  } else {

    let location = ''
    props.cities.map(city => {
      if (city.name === props.display) {
        location = city;
      }
    })

    return (
      <div className='display-data'>
        <div className='title'>{props.display.name}</div>
        <div className='information'>
          <div className='temp-display'>
            <div className='temp-main'>{convertFaren(location.main.temp)}</div>
            <div className='temp-low'></div>
            <div className='temp-high'></div>
          </div>
          <div className='sky'>
            <div className='sky-main'></div>
            <div className='sky-description'></div>
          </div>
          <div className='sun'>
            <div className='sunrise'></div>
            <div className='sunset'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Display