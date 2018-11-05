import React, { Component } from 'react'
import './index.scss'
import { request } from '../../api'
// import PropTypes from 'prop-types'

export default class index extends Component {
  state = {
    hot: [],
    all: {}
  }
  componentWillMount = () => {
    this.getCity()
  }

  getCity = async () => {
    const { hot, all } = await request('/city')
    this.setState({
      hot,
      all
    })
  }

  render() {
    const {hot, all} = this.state

    const letters = Object.keys(all).sort()

    const onHide = this.props.onHide

    return (
      <div className="cityLayer">
        <div className="cityLayer__topBar">
          <div className="cityLayer__close" onClick={this.props.closeCityLayer}>
            关闭
          </div>
          <h1 className="cityLayer__title">选择城市</h1>
        </div>
        <div className="cityLayer__content">
          <div className="cityLayer__tag">
            <h2 className="cityLayer__tagName" id="定位">定位城市</h2>
            <div className="cityLayer__currentCity" onClick={() => onHide(this.props.city)}>{this.props.city}</div>
          </div>
          <div className="cityLayer__tag">
            <h2 className="cityLayer__tagName" id="热门">热门城市</h2>
            <ul className="cityTagList">
              {
                hot.map((item, i) => {
                  const tagClass = i % 3 !== 0 ? 'cityTagList__tagLeft' : ''
                  return <li className={`cityTagList__tag ${tagClass}`} key={item.id} onClick={() => onHide(item.name)}>{item.name}</li>
                })
              }
            </ul>
          </div>
          <div className="cityList">
            {
              letters.map(
                key => (
                  <div className="cityList__wrapper" id={key} key={key}>
                    <h4 className="cityList__letter">{key}</h4>
                    <ul className="cityList__cityNameList">
                      { all[key].map( city => <li key={city.id} onClick={() => onHide(city.name)}>{city.name}</li> ) }
                    </ul>
                  </div>
                )
              )
            }
          </div>
        </div>
        <div className="cityLayer__index">
          <ul className="cityLayer__abc">
            <li><a href="#定位">定位</a></li>
            <li><a href="#定位">热门</a></li>
            {
              letters.map( item => <li key={item}><a href={'#' + item}>{item}</a></li> )
            }
          </ul>
        </div>
      </div>
    )
  }
}
