import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './route/Home'
import User from './route/User'
import Detail from './route/Detail'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/user" component={User} exact></Route>
          <Route path="/detail" component={Detail} exact></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
