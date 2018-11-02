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
    ReactDOM.render(
      this.props.children, 
      this.tag
    )
  }
  componentWillUnmount = () => {
    if (!this.tag) {
      return 
    }
    ReactDOM.unmountComponentAtNode(this.tag)
    document.removeChild(this.tag)
    this.tag = null
  }
  render() {
    return null
  }
}
