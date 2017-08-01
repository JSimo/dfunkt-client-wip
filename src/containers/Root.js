import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom';

import configureStore from '../configureStore'
import App from './App'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )
  }
}
