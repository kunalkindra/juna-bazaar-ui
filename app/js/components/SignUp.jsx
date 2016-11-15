import React from 'react';
import { browserHistory } from 'react-router';
import utils from '../utils/utils';
import {FormGroup, FormControl, Button} from 'react-bootstrap';

const SignUp = React.createClass({
    signUp() {
        utils.register();
        browserHistory.push('/');
    },
    render() {
        return (
            <form>
                <FormGroup>
                    Create an account
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" id="name" placeholder="Name"/>
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" id="email-id" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <FormControl type="password" id="password" placeholder="Password"/>
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" id="mobile-number" placeholder="Mobile Number"/>
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" id="city" placeholder="City"/>
                </FormGroup>
                <FormGroup>
                    <Button onClick={this.signUp}>Create an account</Button>
                </FormGroup>
            </form>
        )
    }
})

module.exports = SignUp;
