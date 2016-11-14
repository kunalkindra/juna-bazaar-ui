import React from 'react';
import { Link, browserHistory } from 'react-router';
import utils from '../utils/utils';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const TopNav = React.createClass({
    signOutClick() {
        utils.logOut();
    },
    getInitialState() {
        return {
            activeNav: this.props.current
        }
    },
    contextTypes: {
        router: React.PropTypes.object
    },
    onNavClick(selectedKey) {
        this.setState({
            activeNav: selectedKey
        });
        this.context.router.push(this.props.data[selectedKey-1].route);
    },
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        Juna Bazaar
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav activeKey={this.state.activeNav} onSelect={this.onNavClick}>
                {this.props.data.map(function (navItem, key) {
                    return <NavItem eventKey={key+1} linkTo={navItem.route}>{navItem.text}</NavItem>
                })}
                </Nav>
                <Nav pullRight onSelect={this.signOutClick}>
                    <NavItem eventKey={1} href="#">Sign Out</NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
})

module.exports = TopNav;