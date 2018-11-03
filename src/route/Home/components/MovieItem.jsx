import React from 'react'
import './MovieItem.scss'

export default function MovieItem() {
  return (
    <div className="moveItem">
      <div className="moveItem__psd">
        <img src="/source/movie/asset1.jpeg" alt=""/>
      </div>
      <div className="moveItem__details">
        <div className="moveItem__name">
          猫的传说
        </div>
        <div className="moveItem__eval">
          观众评分<span>9.3</span>
        </div>
        <div className="moveItem__director">
          导演：猫先生
        </div>
        <div className="moveItem__starring">
          主演：还是猫先生
        </div>
        <div className="moveItem__tag">
          <div className="tTag tTag__red">今日最热</div>
          <div className="tTag tTag__blue">今日最热</div>
        </div>
      </div>
      <div className="moveItem__btn">
        <button className="tBtn">购票</button>
        <span>9.9元起</span>
      </div>
    </div>
  )
}