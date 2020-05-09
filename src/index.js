import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import { Home, Software } from './Pages'
import { Page } from './components'
import * as serviceWorker from './serviceWorker'
import {
  BrowserRouter,
  Redirect,
  Route,
} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Page>
      <Route exact path='/'><Redirect to="/home" /></Route>
      <Route path='/home/:section?'><Home /></Route>
      <Route path='/programming/:section?'><Software /></Route>
      {/* <Route path='/work/:section?'> <Work /></Route> */}
      {/* <Route path='/work'><Work /> </Route> */}
    </Page>
  </BrowserRouter>
  , document.getElementById('root'))
serviceWorker.unregister()