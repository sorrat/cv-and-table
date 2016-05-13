import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router'

import {FirstPage} from './FirstPage.jsx'
import {SecondPage} from './SecondPage.jsx'


class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/1" component={FirstPage} />
        <Route path="/2" component={SecondPage} />
        <Redirect from="*" to="/1" />
      </Router>
    )
  }
}

export {App};
