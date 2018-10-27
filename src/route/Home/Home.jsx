import React, { Component } from 'react'
import TopBar from './TopBar/TopBar'
import CSlider from './cSlider/cSlider'
import './Home.scss'

export default class Home extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    const sliderOptions = {
      intervalTime: 1000,
      rollTime: 1000
    }
    return (
      <div className="home">
        <TopBar/>
        <CSlider {...sliderOptions}>
          <div>
            <img src="" alt=""/>
          </div>
          <div>
            <img src="" alt=""/>
          </div>
          <div>
            <img src="" alt=""/>
          </div>
        </CSlider>
      </div>
    )
  }
}
