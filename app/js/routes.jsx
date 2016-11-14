import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './app';
import SignIn from './components/SignIn';
import AdList from './components/AdList';
import AdDetail from './components/AdDetail';
import CreateAd from './components/CreateAd';
import MyAds from './components/MyAds';
// import { createHashHistory } from 'history';
import utils from './utils/utils';

// const customHistory = createHashHistory({queryKey: false});


const Routes = (<Router history={browserHistory}>
	<Route path="/" component={App}>
		<IndexRoute component={AdList} />
		<Route path="/advertisements" component={AdList} onEnter={utils.handleLoggedOutRedirect}/>
		<Route path="/advertisements/:id" component={AdDetail} onEnter={utils.handleLoggedOutRedirect}/>
		<Route path="/new-ad" component={CreateAd} onEnter={utils.handleLoggedOutRedirect}/>
		<Route path="/my-ads" component={MyAds} onEnter={utils.handleLoggedOutRedirect}/>
	</Route>


</Router>)

module.exports = Routes;

