import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export default function TabBar({current}) {
  return (
    <div className="TabBar">
      <Link to="/" className={ `TabBar__item ${current === 'movie' ? 'TabBar__active' : ''}` }>
        <i className="TabBar__icon movie_icon"></i>
        <div className="TabBar__title">电影</div>
      </Link>
      <Link to="/user" className={ `TabBar__item ${current === 'user' ? 'TabBar__active' : ''}` }>
        <i className="TabBar__icon user_icon"></i>
        <div className="TabBar__title">我的</div>
      </Link>
    </div>
  )
}


