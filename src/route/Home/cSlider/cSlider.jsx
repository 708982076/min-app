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
    children: PropTypes.array.isRequired, //显示的结构
  }

  static defaultProps = {
    className: ''
  };

  state = {
    startX: 0,
    moveX: 0,
    index: 0,
    parentWidth: 0
  }

  parent = null

  bodyDom = []

  componentDidMount = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        return {
          index: prevState.index === this.props.children.length - 1 ? 0 : prevState.index + 1
        }
      })
    }, 1000)   

    this.setState({ parentWidth: this.parent.offsetWidth })
  }
  

  touchStart = (e) => {
    const startX = e.changedTouches[0].clientX
    this.setState({ startX })
  }

  touchEnd = (e) => {
    const moveDist = this.state.startX - e.changedTouches[0].clientX
    const onDist = moveDist < 0 ? true : false //true=左
    const len = this.props.children.length - 1
    const node = [...this.parent.children]
    const hanlder = function() {
      this.style.transitionDuration = '0ms'
      this.removeEventListener('transitionend', hanlder)
    }
    let prveNode


    node.pop()

    //设置缓冲动作
    let index = this.state.index;
    if (Math.abs(moveDist) < 40) {
      //dom选取
      node[index].style.transitionDuration = '300ms'
      node[index].addEventListener('transitionend', hanlder)

      if (onDist) {
        prveNode = node[index === 0 ? len : index - 1]
      }else {
        prveNode = node[index === len ? 0 : index + 1]
      }

      prveNode.addEventListener('transitionend', hanlder)
      prveNode.style.transitionDuration = '300ms'

      this.setState({moveX: 0})

      return 
    }

    this.setState({
      moveX: 0
    })

    if (!onDist) {
      //向左滑
      node[index].style.transform=`translate(${this.parentWidth}px, 0`
      node[index].style.transitionDuration = '300ms'
      node[index].addEventListener('transitionend', hanlder)


      index = index === this.props.children.length - 1 ? 0 : ++index

      prveNode = node[index]


      this.setState({index})
    }else{
      //向右滑
      node[index].style.transform=`translate(${-this.parentWidth}px, 0)`
      node[index].style.transitionDuration = '300ms'
      node[index].addEventListener('transitionend', hanlder)

      index = index === 0 ? this.props.children.length - 1 : --index

      prveNode = node[index]

      console.log(111)
      this.setState({index})
    }

    prveNode.addEventListener('transitionend', hanlder)
    prveNode.style.transitionDuration = '300ms'
    
  }

  touchMove = (e) => {
    let clientX = e.changedTouches[0].clientX,
        moveX =  clientX - this.state.startX
    this.setState({moveX})
  }

  touchLeft = (index) => {
    let parentWidth = this.state.parentWidth
    if (
      index === this.state.index + 1 || 
      ( this.state.index === this.props.children.length - 1 && index === 0 )
    ) {
      return {
        transform: `translate(${this.state.moveX + parentWidth}px, 0) translateZ(0)`
      }
    }

    return {
      transform: `translate(${-parentWidth}px, 0) translateZ(0)`
    }
  }

  touchRight = (index) => {
    let parentWidth = this.state.parentWidth
    if (
      index === this.state.index - 1 ||
      ( this.state.index === 0 && index === this.props.children.length - 1 )
    ) {
      return {
        transform: `translate(${this.state.moveX - parentWidth}px, 0) translateZ(0)`
      }
    }
    
    if (
      index === this.state.index + 1 ||
      ( this.state.index === this.props.children.length - 1 && index === 0 )
    ) {
      return {
        transform: `translate(${parentWidth}px, 0) translateZ(0)`
      }
    }

    return {
      transform: `translate(${-parentWidth}px, 0) translateZ(0)`
    }
  }

  touchInit = (index) => {
    let parentWidth = this.state.parentWidth
    if (index === this.state.index) {
      return {
        transform: `translate(${this.state.moveX}px, 0) translateZ(0)`
      }
    }else if (
      index === this.state.index + 1 || 
      ( this.state.index === this.props.children.length - 1 && index === 0 )
    ) {
      return {
        transform: `translate(${this.state.moveX + parentWidth}px, 0) translateZ(0)`
      }
    }else if (
      index === this.state.index - 1 ||
      ( this.state.index === 0 && index === this.props.children.length - 1 )
    ) {
      return {
        transform: `translate(${this.state.moveX - parentWidth}px, 0) translateZ(0)`
      }
    }

    return {
      transform: `translate(${-parentWidth}px, 0) translateZ(0)`
    }
  }

  render() {
    //如果moveX减小 index+1的div-- index==最大 index=0--
    //如果moveX增大 index-1的div++ index==最小 index=最大值++
    const styleOpstions = (index) => {  
      if (index === this.state.index) {
        return {
          transform: `translate(${this.state.moveX}px, 0) translateZ(0)`
        }
      }
      if (this.state.moveX < 0) {
        return this.touchLeft(index)
      }else if (this.state.moveX > 0){
        return this.touchRight(index)
      }else {
        return this.touchInit(index)
      }
    }
    const children = this.props.children.map((node, index) => {
      return ( 
        <div 
          key={index} 
          style={styleOpstions(index)}
          className='cSlite__imgWrap'
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
        ref={(elem) => this.parent = elem}
      >
        {children}
        <ul className="cSlite__dots">
          {
            this.props.children.map((ele, index) => {
              return <li key={index}></li>
            })
          }
        </ul>
      </div>
    )
  }
}
