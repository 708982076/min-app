import React, { Component } from 'react'
import './index.scss'
import TopBar from '../../common/TopBar'

export default class Detail extends Component {
  render() {
    return (
      <div className="detail">
        <div className="detail__header">
          <TopBar/>
          <div className="detail__movieShow">
            <div className="movieInfo">
              <div className="movieInfo__name">神秘的巨星</div>
              <div className="movieInfo__subName">shenmidejuxing</div>
              <div className="movieInfo__type">剧情/喜剧</div>
              <div className="movieInfo__film">
                <span className="movieInfo__state">印度</span>
                |
                <span className="movieInfo__time">150分钟</span>
              </div>
              <div className="movieInfo__releaseDate">
                2018-01-19 在中国大陆上映
              </div>
            </div>
            <div className="detail__moviePoster">
              <img src="/source/image/asset1.jpeg" alt=""/>
            </div>
          </div>
        </div>
        <section className="evaluateBar">
          <div className="evaluateBar-score">
            <div className="evaluateBar-scoreCont">
              <span className="evaluateBar-num">9.3</span>
              <i className="evaluateBar-starIcon"></i>
            </div>
            <div className="evaluateBar-scoreTitle"></div>
          </div>
          <div className="evaluateBar-finer">
            <span className="evaluateBar-per">83%</span>
            <span className="evaluateBar-perTitle"></span>
          </div>
          <div className="evaluateBar-see">
            <div className="evaluateBar-wantPerson">
              712123
            </div>
            <div className="evaluateBar-seeTitle"></div>
          </div>
        </section>
        <section className="detail__button">
          <button className="tBtn-gray"></button>
          <button className="tBtn-gray"></button>
        </section>
        <section className="detail__movieIntro">
          <div className="detail__IntroText">大数据滴啊上降低欧萨就打扫ID决赛大搜到</div>
        </section>
      </div>
    )
  }
}
