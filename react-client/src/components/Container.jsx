import React from 'react'
import ReactDOM from 'react-dom'
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants'

const Container = (props) => {

  const containerGen = () => {
    let cityContainer = [];

    let result = [];
    props.cities.map(city => {
       result.push(<button className='subContainer' key={city.name}>{city.name}</button>);
    })
    cityContainer.push(<div>{result}</div>);
    return cityContainer
  }

  return (
    <div className="container" >
      {containerGen()}
    </div>
  )
}

export default Container;