import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './route/Home'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home}></Route>
      </BrowserRouter>
    )
  }
}
