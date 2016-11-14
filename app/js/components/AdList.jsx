import React from 'react';
import { Link } from 'react-router'

const AdList = React.createClass({
    render() {
        return(
            <div>
                <h1>AdList</h1>
                <Link to='/advertisements/1'>Ad 1</Link>
                <Link to='/advertisements/2'>Ad 2</Link>
                <Link to='/advertisements/3'>Ad 3</Link>
            </div>
        )
    }
})

module.exports = AdList;