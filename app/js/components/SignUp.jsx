import React from 'react';
import { browserHistory } from 'react-router';
import utils from '../utils/utils';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import LinkedStateMixin from 'react-addons-linked-state-mixin' // ES6

const SignUp = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function() {
        return {
            email: '',
            name: '',
            password: '',
            mobileNumber: '',
            city: ''
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
    signUp() {
        if(this.validate()) {
            utils.register(Object.assign({},this.state));
            browserHistory.push('/');
        }else{
            alert("Missing data")
        }
    },
    render() {
        return (
            <form>
                <FormGroup>
                    Create an account
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" id="name" placeholder="Name" valueLink={this.linkState('name')}/>
                </FormGroup>
                <FormGroup>
                    <FormControl type="email" id="email-id" placeholder="Email" valueLink={this.linkState('email')}/>
                </FormGroup>
                <FormGroup>
                    <FormControl type="password" id="password" placeholder="Password" valueLink={this.linkState('password')}/>
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" id="mobile-number" placeholder="Mobile Number" valueLink={this.linkState('mobileNumber')}/>
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" id="city" placeholder="City" valueLink={this.linkState('city')}/>
                </FormGroup>
                <FormGroup>
                    <Button onClick={this.signUp}>Create an account</Button>
                </FormGroup>
            </form>
        )
    }
})

module.exports = SignUp;
