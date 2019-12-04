import React from 'react'
import { FaPlus } from 'react-icons/fa';

const Container = (props) => {

  const containerGen = () => {
    let cityContainer = [];

    let result = [];
    props.cities.map((city, index) => {
       result.push(
        <div className='subContainer' key={`${index}`} >
          <div className="top-left-tile" onClick={() => props.switchCity(city.name)}></div>
          <div className="closeWrapper" onClick={() => props.removeCity(city.name)}>
            <i className="fa fa-close"></i>
          </div>
          <div className="majority-tile" onClick={() => props.switchCity(city.name)}>{city.name}</div>
        </div>
      );
    })
    cityContainer.push
      (<div className='container'>
        {result}
        <div className='addCity' key='addCity' onClick={() => props.switchView(false)}><FaPlus /></div>
      </div>);
    return cityContainer
  }

  return (
    containerGen()
  )
}

export default Container;