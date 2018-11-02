import React, { Component } from 'react'
import TopBar from './components/TopBar/TopBar'
import CSlider from './components/cSlider/cSlider'
import MovieItem from './components/MovieItem/MovieItem'
import TabBar from '../TabBar/TabBar'
import ComponentToBody from '../ComponentToBody'
import './index.scss'

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
            <img src={"/source/img/1.jpg"} alt=""/>
          </div>
          <div>
            <img src={"/source/img/2.jpg"} alt=""/>
          </div>
          <div>
            <img src={"/source/img/3.jpg"} alt=""/>
          </div>
          <div>
            <img src={"/source/img/4.jpg"} alt=""/>
          </div>
          <div>
            <img src={"/source/img/5.jpg"} alt=""/>
          </div>
          <div>
            <img src={"/source/img/6.jpg"} alt=""/>
          </div>
        </CSlider>
        <ul className="movieList">
          <li><MovieItem/></li>
          <li><MovieItem/></li>
          <li><MovieItem/></li>
          <li><MovieItem/></li>
          <li><MovieItem/></li>
          <li><MovieItem/></li>
        </ul>
        <TabBar current="movie"/>
        <ComponentToBody> <div></div> </ComponentToBody>
      </div>
    )
  }
}
