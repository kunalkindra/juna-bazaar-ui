import React from 'react';
import UploadImageForm from './UploadImageForm/UploadImageForm';

const AdDetail = React.createClass({
    render() {
        return(
            <div>
                <h1>AdDetail - {this.props.params.id}</h1>
                <UploadImageForm/>
            </div>
        )
    }
})

module.exports = AdDetail;

