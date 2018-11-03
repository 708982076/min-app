import React, { Component } from 'react'
import './index.scss'
// import PropTypes from 'prop-types'

export default class index extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div className="cityLayer">
        <div className="cityLayer__topBar">
          <div className="cityLayer__close">关闭</div>
          <h1 className="cityLayer__title">选择城市</h1>
        </div>
        <div className="cityLayer__content">
          <div className="cityLayer__tag cityLayer__locaCity">
            <h2 className="cityLayer__tagName" id="定位">定位城市</h2>
            <ul className="cityLayer__TagList">
              <li>信阳</li>
            </ul>
          </div>
          <div className="cityLayer__tag cityLayer__hotCity">
            <h2 className="cityLayer__tagName" id="热门">热门城市</h2>
            <ul className="cityLayer__TagList">
              <li>北京</li>
              <li>北京</li>
              <li>北京</li>
              <li>北京</li>
              <li>北京</li>
            </ul>
          </div>
          <div className="cityLayer__city">
            <h4 className="cityLayer__letter" id="A">A</h4>
            <ul className="cityLayer__cityList">
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
            </ul>
            <h4 className="cityLayer__letter" id="B">B</h4>
            <ul className="cityLayer__cityList">
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
            </ul>
            <h4 className="cityLayer__letter" id="C">C</h4>
            <ul className="cityLayer__cityList">
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
              <li>阿贝</li>
            </ul>
          </div>
        </div>
        <div className="cityLayer__index">
          <ul className="cityLayer__abc">
            <li><a href="#定位">定位</a></li>
            <li><a href="#定位">热门</a></li>
            <li><a href="#A">A</a></li>
            <li><a href="#B">B</a></li>
            <li><a href="#C">C</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
