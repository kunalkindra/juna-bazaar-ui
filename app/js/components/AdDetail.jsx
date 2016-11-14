import React from 'react';

const AdDetail = React.createClass({
    render() {
        return(<h1>AdDetail - {this.props.params.id}</h1>)
    }
})

module.exports = AdDetail;