import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//import { connect } from 'react-redux';

import Home from './Home';
import User from './User';
import Roles from './Roles';
import RoleInfo from './RoleInfo';
import Header from '../components/Header';
import Login from './Login';


/*const requireAuth = auth => {
  return (nextState, replace) => {
    if (!auth.loggedIn) replace({ pathname: '/login', query: { redirect: nextState.location.pathname } })
  }
}
const notAuthed = auth => {
  return (nextState, replace) => {
    let { location: { query } } = nextState
    if (auth.loggedIn) replace({ pathname: query && query.redirect || '/' })
  }
}*/

/*const requireAuth = login => {
  console.log("bla " + login);
  if (!login || !login.info || login.info.isloggedin === false) {
    //ugly redirect to login page.
    window.location.href = "https:/login2.datasektionen.se/login?callback=" + window.location.origin + "%2F%23%2Flogin%2F%0A";
  }
  return (nextState, replace) => {
    console.log("inside bla" + login);
    if (login && login.info && login.info.isloggedin === false) {
      //ugly redirect to login page.
      window.location.href = "https:/login2.datasektionen.se/login?callback=" + window.location.origin + "%2F%23%2Flogin%2F%0A";
    }
  }
}*/

class App extends Component {
  componentDidMount() {
    console.log(this.props.info);
  }

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
                <Route path="/role/:roleid" location={location} component={RoleInfo} />
                <Route path="/login" location={location} component={Login} />
                <Route path="/login/:token" location={location} component={Login} />
              </Switch>
            </div>
          </div>
        )}
      />
    );
  }
}

export default App;
