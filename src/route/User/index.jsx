import React, { Component } from 'react'
import './index.scss'
import TabBar from '../../common/TabBar'

export default class index extends Component {
  render() {
    return (
      <div className="user">
        <div className="user__topContent">
          <div className="operation">
            <div className="operation__opt"></div>
            <div className="operation__msg"></div>
          </div>
          <div className="user__infoContent">
            <div className="user__avatar">
              <img src="/source/avatar.jpeg" alt=""/>
            </div>
            <div className="user__info">
              <div className="user__name">chengpeng</div>
              <div className="user__hot">
                <span className="user__follow">关注 0</span>
                <span className="user__fans">被关注 0</span>
              </div>
              <div className="user__identity">黑钻会员</div>
            </div>
          </div>
        </div>
        <div className="user__hobbyContend">
          <div className="user__hobbyList">
            <div className="user__hobbyName">收藏的电影</div>
            <div className="user__number">
              12
              <i className="arrows"></i>
            </div>
          </div>
          <div className="user__hobbyList">
            <div className="user__hobbyName">看过的电影</div>
            <div className="user__number">
              123
              <i className="arrows"></i>
            </div>
          </div>
        </div>
        <TabBar current='user'/>
      </div>
    )
  }
}
