import React from 'react'

export default ({left, right, middle}) => {
  return (
    <div className="tTopBar">
      <div className="tTopBar__left"></div>
      <div className="tTopBar__middle">
        { middle }
      </div>
      <div className="tTopBar__right"></div>
    </div>
  )
}
