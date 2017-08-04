import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {
  Register,
  Login,
  Permissions,
  Banks,
  Accounts
} from './containers';

import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory()

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router basename="#/ezoro" history={customHistory}>
          <div className="app-container">
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/permissions" component={Permissions} />
              <Route exact path="/banks" component={Banks} />
              <Route exact path="/accounts" component={Accounts}/>
          </div>
      </Router>
		);
	}
}

export default connect(state => state)(App);
