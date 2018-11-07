import React from 'react'
import './index.scss'

export default ({color, children}) => {
  return (
    <div className={'tTopBar ' + (color==='black' ? 'tTopBar__black' : '')}>
      <div className="tTopBar__left"></div>
      <div className="tTopBar__middle">
        { children }
      </div>
      <div className="tTopBar__right"></div>
    </div>
  )
}
