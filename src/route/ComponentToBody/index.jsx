import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

export default class ComponentToBody extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }
  componentWillMount = () => {
    this.tag = document.createElement('div')
    document.body.appendChild(this.tag)
  };
  componentDidMount = () => {
    console.log(ReactDOM)
  }
  render() {
    return null
  }
}
