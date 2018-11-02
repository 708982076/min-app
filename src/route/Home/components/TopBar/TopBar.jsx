import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './TopBar.scss'

export default class TopBar extends Component {
  // static propTypes = {
  //   // prop: PropTypes
  // }

  render() {
    return (
      <div className='TopBar'>
        <div className='TopBar__city'>武汉</div>
        <div className='TopBar__search'></div>
        <div className='TopBar__scan'></div>
      </div>
    )
  }
}
