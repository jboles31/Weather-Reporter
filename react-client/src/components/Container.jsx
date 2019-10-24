import React from 'react'
import { FaPlus } from 'react-icons/fa';

const Container = (props) => {

  let count = 0
  let counter = () => {
    count =+ 1
    return count;
  }

  const containerGen = () => {
    let cityContainer = [];

    let result = [];
    props.cities.map(city => {
       result.push(
        <div className='subContainer' key={'subContainer' + counter()} onClick={() => props.switchCity(city.name)}>{city.name}</div>
      );
    })
    cityContainer.push
      (<div className='container'>
        {result}
        <div className='addCity' onClick={() => props.switchView()}><FaPlus /></div>
      </div>);
    return cityContainer
  }

  return (
    containerGen()
  )
}

export default Container;