import React from 'react'
import './TopBar.scss'

export default (props) => {
  return (
    <div className='TopBar'>
      <div className='TopBar__city' onClick={props.toggleCityLayer}>
        {props.city}
      </div>
      <div className='TopBar__search'></div>
      <div className='TopBar__scan'></div>
    </div>
  )
}
