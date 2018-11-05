import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Slider.scss'

export default class Slider extends Component {
  static propTypes = {
    autoPlay: PropTypes.bool, //是否自动播放
    intervalTime: PropTypes.number.isRequired, //滚动间隔时间
    rollTime: PropTypes.number.isRequired, //滚动需要时间
    className: PropTypes.string, //root类名
    dotsClass: PropTypes.string, //点的类名
    posters: PropTypes.array.isRequired //
  }

  static defaultProps = {
    className: ''
  };

  state = {

  }


  componentDidMount = () => {
    
  }


  render() {
    //如果moveX减小 index+1的div-- index==最大 index=0--
    //如果moveX增大 index-1的div++ index==最小 index=最大值++

    const children = this.props.posters.map(item => {
      return ( 
        <div 
          key={ item.id } 
          className='cSlite__imgWrap'
        >
          <img src={ item.image } alt=""/>
        </div>
      )
    }) 

    return (
      <div 
        className={`cSlite ${this.props.className}`} 
      >
        {children}
        <ul className="cSlite__dots">
          {
            this.props.posters.map(item => {
              return <li key={item.id}></li>
            })
          }
        </ul>
      </div>
    )
  }
}
