import React from 'react';

const SignIn = React.createClass({
    render() {
        return (
            <div>Welcome to Juna Bazaar
                <p>
                    <label htmlFor="email_id">Enter email id</label>
                    <input type="text" id="email_id"/>

                    <label htmlFor="password">Password</label>
                    <input type="text" id="password"/>

                    <input type="button" value="Sign In"/>
                </p>
            </div>
    )
    }
})

module.exports = SignIn;
