import React from 'react'

const Display = (props) => {

  return (
    <div className='display'>
      <div className='greeting'>
        <i class="fa fa-globe"></i>
      </div>
      <div className='search'> 
        <input className='search-bar' type='search'></input>
        <button type="submit" class="search-button">
        <i className="fa fa-search"></i>
     </button>
      </div>
    </div>
  )
}

export default Display