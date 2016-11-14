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
    getCurrentNavIndex() {
        let result = 1;
        menuItems.forEach((item, index) => {
            if(this.props.location.pathname == item.route) {
                result = index + 1;
                return false;
            }
        })

        return result;
    },
    render() {
        var op = utils.isLoggedIn() ? (
            <div>
                <header>
                    <TopNav data={menuItems} current={this.getCurrentNavIndex()}/>
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
