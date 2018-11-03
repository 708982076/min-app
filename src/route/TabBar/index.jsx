import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export default function TabBar({current}) {
  return (
    <div className="TabBar">
      <Link to="/" className={ `TabBar__item ${current === 'movie' ? 'TabBar__active' : ''}` }>
        <i className="TabBar__icon"></i>
        <div className="TabBar__title">我是谁</div>
      </Link>
      <Link to="/user" className={ `TabBar__item ${current === 'user' ? 'TabBar__active' : ''}` }>
        <i className="TabBar__icon"></i>
        <div className="TabBar__title">我是谁</div>
      </Link>
    </div>
  )
}


