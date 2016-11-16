import React from 'react';
import { browserHistory } from 'react-router';
import utils from '../utils/utils';

const SignIn = React.createClass({
    signIn() {
        utils.logIn();
        browserHistory.push('/');
    },
    render() {
        return (
        <div>Welcome to Juna Bazaar
            <p>
                <label htmlFor="email-id">Enter email id</label>
                <input type="text" id="email-id"/>

                <label htmlFor="password">Password</label>
                <input type="text" id="password"/>

                <input type="button" value="Sign In" onClick={this.signIn}/>
            </p>
        </div>
    )
    }
})

module.exports = SignIn;
