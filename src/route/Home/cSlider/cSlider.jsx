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
    startX: 0,
    moveX: 0,
    index: 1
  }

  touchStart = (e) => {
    let startX = e.changedTouches[0].clientX
    this.setState({ startX })
  }

  touchEnd = (e) => {
    //设置缓冲动作
    //index++/--
  }

  touchMove = (e) => {
    let clientX = e.changedTouches[0].clientX,
        moveX =  clientX - this.state.startX
    this.setState({moveX})
  }

  bodyMove = () => {
    if (this.state.moveX < 0) {
      //向左滑
      // index、index + 1
      // 如果index=max、index、min index
      // index.body.translate --
    }else if (this.state.moveX > 0) {
      //向左滑
      // index、index - 1  
      // 如果index = 0， index、max index
      // index.body.translate ++
    }
  }

  render() {
    const styleOpstions = (index) => {
      let moveVal = this.state.moveX 
      if (moveVal < 0 && index === this.state.index) {
        moveVal += 375
      }else if (moveVal > 0 && index === this.state.index + 1) {
        moveVal -= 375
      }else {
        moveVal = -375
      }
      return {
        transform: `translate(${moveVal}px, 0) translateZ(0)`,
        zIndex: 99 - index
      }
    }
    const children = this.props.children.map((node, index) => {
      return ( 
        <div 
          key={index} 
          style={styleOpstions(index)}
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
        onTouchEnd={this.touchEnd}
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
