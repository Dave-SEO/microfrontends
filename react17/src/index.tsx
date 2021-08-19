import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import SelectCart from './views/SelectCart/SelectCart'
import SelectVideo from './views/SelectVideo/SelectVideo'
import VideoDetails from './views/VideoDetails/VideoDetails'
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
      <Route exact strict path="/selectVideo" component={SelectVideo} />
      <Route exact strict path="/videoDetails" component={VideoDetails} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
