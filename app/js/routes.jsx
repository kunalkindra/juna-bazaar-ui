import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import App from './app'
import SignIn from './components/SignIn'

const Routes = (<Router history={browserHistory}>
	<Route path="/" component={App}/>
	<Route path="/signin" component={SignIn}/>
</Router>)

module.exports = Routes;

