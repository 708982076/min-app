import React, { Component } from 'react'
import MovieItem from './MovieItem'
import { request } from '../../../api'
import "./MovieSlider.scss"


export default class MovieSlier extends Component {
  state = {
    offset: 0
  }
  componentWillMount = () => {
    
  };
  
  scrollEvent = (e) => {
    // const { offset } = this.state
    // console.log(e.target.offsetHeight)
    // console.log(e.target.scrollTop)
    // request()
  }
  render() {
    return (
      <ul className="movieList" onScroll={this.scrollEvent}>
        {
          this.props.movies.map(item => <li key={item.id}><MovieItem movie={item}/></li>)
        }
      </ul>
    )
  }
}
