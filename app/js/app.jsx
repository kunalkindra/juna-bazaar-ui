import React from 'react';
import TopNav from './components/TopNav';
import utils from './utils/utils';
import SignIn from './components/SignIn';

const menuItems = [
    {
        text: 'All Ads',
        route: '/advertisements'
    },
    {
        text: 'My Ads',
        route: '/my-ads'
    },
    {
        text: 'Create Ad',
        route: '/new-ad'
    }
]

const App = React.createClass({
    render() {
        var op = utils.isLoggedIn() ? (
            <div>
                <header>
                    <TopNav data={menuItems}/>
                </header>
                {this.props.children}
            </div>
        ) : (
            <SignIn/>
        );
        return op;
    }
});

module.exports = App;
