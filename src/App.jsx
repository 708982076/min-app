import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './route/Home'
import User from './route/User'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/user" component={User} exact></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
