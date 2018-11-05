import React, { Component } from 'react'
import TopBar from './components/TopBar'
import Slider from './components/Slider'
import TabBar from '../TabBar'
import MovieSlider from './components/MovieSlider'
import ComponentToBody from '../ComponentToBody'
import CityLayer from '../CityLayer'
import { request } from '../../api'
import './index.scss'


export default class Home extends Component {
  state = {
    city: '',
    showCityLayer: false,
    movies: [],
    posters: []
  }

  componentWillMount = () => {
    this.getIndexData()
  }
  getIndexData = async () => {
    const {city, movies, posters} = await request('/index')
    this.setState({
      city,
      movies,
      posters
    })
  }

  openCityLayer = () => {
    this.setState({
      showCityLayer: true
    })
  }

  closeCityLayer = () => {
    this.setState({
      showCityLayer: false
    })
  }

  hideEvent = (city) => {
    console.log(111)
    this.setState({
      city
    })
    this.closeCityLayer()
  }

  render() {
    const {city, movies, posters, showCityLayer} = this.state
    const sliderOptions = {
      intervalTime: 1000,
      rollTime: 1000,
      posters: []
    }
    return (
      <div className="home">
        <TopBar city={city} openCityLayer={this.openCityLayer}/>
        <Slider {...sliderOptions} posters={posters}/>
        <MovieSlider movies={movies}></MovieSlider>
        <TabBar current="movie"/>
        { 
          showCityLayer && 
          <ComponentToBody>
            <CityLayer closeCityLayer={this.closeCityLayer} city={city} onHide={this.hideEvent}/>
          </ComponentToBody>
        }
      </div>
    )
  }
}
