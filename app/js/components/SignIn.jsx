import React from 'react';
import { browserHistory } from 'react-router';
import utils from '../utils/utils';
import LinkedStateMixin from 'react-addons-linked-state-mixin' // ES6
import ServiceManager from '../serviceManager/ServiceManager'

const SignIn = React.createClass({
    mixins: [LinkedStateMixin],

    getInitialState: function() {
        return {
            email: '',
            password: '',
        }
    },

    validate() {
        var isValid=true;
        for(var key in this.state){
            if(this.state[key]===''){
                isValid=false;
                break;
            }
        }
        return isValid;
    },

    success(response) {
        if (response.status == 200) {
            utils.logIn()
            browserHistory.push('/');
        }
    },

    failure(e)  {
        alert('Invalid credentials')
    },

    sendRequest: function () {
        ServiceManager
            .exec('SIGN_IN', {
                data: {
                    username: this.state.email,
                    password: this.state.password
                }
            }, true)
            .then(this.success)
            .catch(this.failure);
    },

    signIn() {
        if(this.validate()) {
            this.sendRequest();
        }else{
            alert("All fields are required")
        }
    },


    render() {
        return (
        <div>Welcome to Juna Bazaar
            <p>
                <label htmlFor="email-id">Enter email id</label>
                <input type="text" id="email-id" valueLink={this.linkState('email')}/>

                <label htmlFor="password" >Password</label>
                <input type="text" id="password" valueLink={this.linkState('password')}/>

                <input type="button" value="Sign In" onClick={this.signIn}/>
            </p>
        </div>
    )
    }
})

module.exports = SignIn;
