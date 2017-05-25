import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import User from './User';
import Roles from './Roles';
import Header from '../components/Header';
import './app.css';

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <div>
            <Header />
            <div id="content">
              <Switch key={location.key}>
                <Route exact path="/" location={location} component={Home} />
                <Route path="/roles" location={location} component={Roles} />
                <Route path="/user/:kthid" location={location} component={User} />
              </Switch>
            </div>
          </div>
        )}
      />
    );
  }
}

export default App;
