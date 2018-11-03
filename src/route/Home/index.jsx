import React, { Component } from 'react'
import TopBar from './components/TopBar'
import Slider from './components/Slider'
import MovieItem from './components/MovieItem'
import TabBar from '../TabBar'
import ComponentToBody from '../ComponentToBody'
import CityLayer from '../CityLayer'
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
        <Slider {...sliderOptions}>
          <div>
            <img src={"/source/image/asset1.jpeg"} alt=""/>
          </div>
          <div>
            <img src={"/source/image/asset2.jpeg"} alt=""/>
          </div>
          <div>
            <img src={"/source/image/asset3.jpeg"} alt=""/>
          </div>
          <div>
            <img src={"/source/image/asset4.jpeg"} alt=""/>
          </div>
          <div>
            <img src={"/source/image/asset5.jpeg"} alt=""/>
          </div>
          <div>
            <img src={"/source/image/asset6.jpeg"} alt=""/>
          </div>
        </Slider>
        <ul className="movieList">
          <li><MovieItem/></li>
          <li><MovieItem/></li>
          <li><MovieItem/></li>
          <li><MovieItem/></li>
          <li><MovieItem/></li>
          <li><MovieItem/></li>
        </ul>
        <TabBar current="movie"/>
        <ComponentToBody>
          <CityLayer/>
        </ComponentToBody>
      </div>
    )
  }
}
