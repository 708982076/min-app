import React, { Component } from 'react'
import './index.scss'
import TopBar from '../../common/TopBar'
import EvaluateBar from './components/EvaluateBar'
import MovieIntro from './components/MovieIntro'
import MovieShow from './components/MovieShow'
import MovieComment from './components/MovieComment'

export default class Detail extends Component {
  state = {
    showMore: false
  }
  toggleShowMore = () => {
    this.setState((prveState) => (
      {
        showMore: !prveState.showMore
      }
    ))
  }
  render() {
    return (
      <div className="detail">
        <section className="detail__header">
          <TopBar/>
          <MovieShow/>
        </section>
        <EvaluateBar />
        <section className="detail__button">
          <button className="tBtn-gray">
            <i className="detail__button__heart"></i>
            想看
          </button>
          <button className="tBtn-gray">
            <i className="detail__button__star"></i>
            看过
          </button>
        </section>
        <MovieIntro toggleShowMore={this.toggleShowMore} showMore={this.state.showMore}/>
        <section className="performer">
          <h2 className="performer-title">演职人员</h2>
          <ul className="performer-shell">
            <li>
              <img src="/source/movie/asset1.jpeg" alt=""/>
            </li>
            <li>
              <img src="/source/movie/asset1.jpeg" alt=""/>
            </li>
            <li>
              <img src="/source/movie/asset1.jpeg" alt=""/>
            </li>
            <li>
              <img src="/source/movie/asset1.jpeg" alt=""/>
            </li>
            <li>
              <img src="/source/movie/asset1.jpeg" alt=""/>
            </li>
            <li>
              <img src="/source/movie/asset1.jpeg" alt=""/>
            </li>
            <li>
              <img src="/source/movie/asset1.jpeg" alt=""/>
            </li>
            <li>
              <img src="/source/movie/asset1.jpeg" alt=""/>
            </li>
            <li>
              <img src="/source/movie/asset1.jpeg" alt=""/>
            </li>
            <li>
              <img src="/source/movie/asset1.jpeg" alt=""/>
            </li>
            <li>
              <img src="/source/movie/asset1.jpeg" alt=""/>
            </li>
          </ul>
        </section>
        <MovieComment/>
      </div>
    )
  }
}
