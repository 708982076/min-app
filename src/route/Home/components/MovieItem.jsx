import React from 'react'
import './MovieItem.scss'

export default function MovieItem({movie}) {
  return (
    <div className="moveItem">
      <div className="moveItem__psd">
        <img src={movie.poster} alt=""/>
      </div>
      <div className="moveItem__details">
        <div className="moveItem__name">
          {movie.name}
        </div>
        <div className="moveItem__eval">
          观众评分<span>{movie.score}</span>
        </div>
        <div className="moveItem__director">
          导演：{movie.director}
        </div>
        <div className="moveItem__starring">
          主演：{movie.starring}
        </div>
        <div className="moveItem__tag">
          {
            movie.tags.length > 1 && 
            movie.tags.split(' ').map((item, i) => {
              if (i % 2) {
                return <div className="tTag tTag__red" key={i}>{item}</div>
              }
              return <div className="tTag tTag__blue" key={i}>{item}</div>
            })
          }
        </div>
      </div>
      <div className="moveItem__btn">
        <button className="tBtn">购票</button>
        <span>9.9元起</span>
      </div>
    </div>
  )
}