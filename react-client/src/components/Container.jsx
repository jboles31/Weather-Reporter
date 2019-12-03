import React from 'react'
import { FaPlus } from 'react-icons/fa';

const Container = (props) => {

  const containerGen = () => {
    let cityContainer = [];

    let result = [];
    props.cities.map((city, index) => {
       result.push(
        <div className='subContainer' key={`${index}`} onClick={() => props.switchCity(city.name)}>
          <div className="cityTitle">{city.name}</div>
          <i className="fa fa-close" onClick={() => props.remove(city.name)}></i>
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