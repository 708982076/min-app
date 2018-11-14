import React from 'react'
import './MovieShow.scss'

export default function MovieShow() {
  return (
    <div className="movieShow">
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
      <div className="movieShow-moviePoster">
        <img src="/source/image/asset1.jpeg" alt="" />
      </div>
    </div>
  )
}
