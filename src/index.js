/*import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'

import App from './App';
import './index.css';


const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);*/

//import 'babel-polyfill'

import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import './index.css';

import WebFontLoader from 'webfontloader';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});


render(
  <Root />,
  document.getElementById('root')
)
