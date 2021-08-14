import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import SelectCart from './views/SelectCart/SelectCart'
import {
  HashRouter as Router,
  // Redirect,
  Route,
  Switch,
} from "react-router-dom";
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact strict path="/selectCart" component={SelectCart} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
