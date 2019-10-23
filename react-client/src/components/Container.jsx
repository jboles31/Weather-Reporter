import React from 'react'
import ReactDOM from 'react-dom'
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants'

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
        <div className='subContainer' key={'subContainer' + counter()} >{city.name}</div>
      );
    })
    cityContainer.push(<div className='container'>{result}</div>);
    return cityContainer
  }

  return (
    containerGen()
  )
}

export default Container;