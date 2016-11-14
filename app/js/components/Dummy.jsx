import React from 'react';

const Dummy = React.createClass({
    render() {
        return (
            <div>Hello {this.props.name}</div>
        )
    }
})

module.exports = Dummy;