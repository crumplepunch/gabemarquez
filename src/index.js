import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import { Home } from './Pages'
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
      <Route exact path='/'><Redirect to='/human'></Redirect></Route>
      <Route path='/:section'><Home /></Route>
      {/* <Route path='/playing/:section?'><Music /></Route> */}
      {/* <Route path='/work/:section?'> <Work /></Route> */}
      {/* <Route path='/work'><Work /> </Route> */}
    </Page>
  </BrowserRouter>
  , document.getElementById('root'))
serviceWorker.unregister()