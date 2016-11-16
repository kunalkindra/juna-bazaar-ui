import React from "react";
import {browserHistory} from "react-router";
import utils from "../utils/utils";
import {FormGroup, FormControl, Button} from "react-bootstrap";
import LinkedStateMixin from "react-addons-linked-state-mixin"; // ES6
// ES6

const SignUp = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function () {
        return {
            email: '',
            fullName: '',
            password: '',
            mobileNo: '',
            cityId: '1'
        }
    },
    cityList: ['Bangalore', 'Chennai', 'Pune', 'Hyderabad', 'Gurgaon', 'Noida', 'Mumbai', 'Coimbatore'],
    componentDidMount() {

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
    signUp() {
        if (this.validate()) {
            utils.register(Object.assign({}, this.state));
            browserHistory.push('/');
        } else {
            alert("Missing data")
        }
    },
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3 className="col-md-6 col-md-offset-3">Sign up</h3>

                    <FormGroup className="col-md-6 col-md-offset-3">
                        <FormControl type="text" id="name" placeholder="Name" valueLink={this.linkState('fullName')}/>
                    </FormGroup>
                    <FormGroup className="col-md-6 col-md-offset-3">
                        <FormControl type="email" id="email-id" placeholder="Email"
                                     valueLink={this.linkState('email')}/>
                    </FormGroup>
                    <FormGroup className="col-md-6 col-md-offset-3">
                        <FormControl type="password" id="password" placeholder="Password"
                                     valueLink={this.linkState('password')}/>
                    </FormGroup>
                    <FormGroup className="col-md-6 col-md-offset-3">
                        <FormControl type="text" id="mobile-number" placeholder="Mobile Number"
                                     valueLink={this.linkState('mobileNo')}/>
                    </FormGroup>
                    <FormGroup className="col-md-6 col-md-offset-3">
                        <FormControl componentClass="select"
                                     valueLink={this.linkState('cityId')}>
                            {this.cityList.map((item, key) => {
                                return <option value={key + 1}>{item}</option>
                            })}
                        </FormControl>
                    </FormGroup>
                    <FormGroup className="col-md-6 col-md-offset-3">
                        <Button bsStyle="primary" className="prodSubmitBtn" onClick={this.signUp}>Create an
                            account</Button>
                    </FormGroup>
                </div>
            </div>
        )
    }
})

module.exports = SignUp;
