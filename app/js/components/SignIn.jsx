import React from "react";
import {browserHistory} from "react-router";
import utils from "../utils/utils";
import LinkedStateMixin from "react-addons-linked-state-mixin";
import ServiceManager from "../serviceManager/ServiceManager";
import {FormGroup, FormControl, Button} from "react-bootstrap"; // ES6

const SignIn = React.createClass({
    mixins: [LinkedStateMixin],

    getInitialState: function () {
        return {
            email: '',
            password: '',
        }
    },

    validate() {
        var isValid = true;
        for (var key in this.state) {
            if (this.state[key] === '') {
                isValid = false;
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
        if (this.validate()) {
            this.sendRequest();
        } else {
            alert("All fields are required")
        }
    },


    render() {
        return (
            <div className="container">
                <h2 className="well">Welcome to Juna Bazaar</h2>
                <div className="form-group row">
                    <h3 className="col-md-6 col-md-offset-3">Sign in</h3>
                    <div className="col-md-6 col-md-offset-3">
                        <label htmlFor="email-id">Email id</label>
                        <input type="text" id="email-id" className="form-control" valueLink={this.linkState('email')}/>
                    </div>

                    <div className="col-md-6 col-md-offset-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control"
                               valueLink={this.linkState('password')}/>
                    </div>
                    <div className="col-md-6 col-md-offset-3">
                        <FormGroup>
                            <Button className="prodSubmitBtn" bsStyle="primary" onClick={this.signIn}>Sign In</Button>
                        </FormGroup>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = SignIn;
