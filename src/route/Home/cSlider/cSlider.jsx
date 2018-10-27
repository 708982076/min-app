import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './cSlider.scss'

export default class cSlider extends Component {
  static propTypes = {
    autoPlay: PropTypes.bool, //是否自动播放
    intervalTime: PropTypes.number.isRequired, //滚动间隔时间
    rollTime: PropTypes.number.isRequired, //滚动需要时间
    className: PropTypes.string, //root类名
    dotsClass: PropTypes.string, //点的类名
    children: PropTypes.array.isRequired,
  }

  static defaultProps = {
    className: ''
  };

  state = {
    moveX: 0,
    moveY: 0
  }

  touchStart = (e) => {
    let moveX = e.changedTouches[0].clientX
    this.setState({ moveX })
  }

  touchMove = (e) => {
    let moveX = e.changedTouches[0].clientX
    // if ( this.state.moveX >= moveX ) {
    //   console.log('左')
    // }else {
    //   console.log('右')
    // }
    const div = document.createElement('span')
    if ( Math.abs(moveX - this.state.moveX) >= 25) {
      this.setState({ moveX })
      div.innerHTML = '快'
      document.body.appendChild(div)
    }else {
      this.setState({ moveX })
      div.innerHTML = '慢'
      document.body.appendChild(div)
    }
  }

  render() {
    const children = this.props.children.map((node, index) => {
      return (
        <div 
          key={index} 
          data-index={index}
        >
          {node.props.children}
        </div>
      )
    }) 
    return (
      <div 
        className={`cSlite ${this.props.className}`} 
        onTouchStart={this.touchStart}
        onTouchMove={this.touchMove}
      >
        <div className="cSlite__show">
          {children}
        </div>
        <ul className="cSlite__dots">
          
        </ul>
      </div>
    )
  }
}
