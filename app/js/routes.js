import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import App from './app'

const Routes = (<Router history={browserHistory}>
		<Route path="/" component={App}/>
	</Router>)

module.exports = Routes;

