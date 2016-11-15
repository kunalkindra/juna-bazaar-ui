import React from 'react';
import UploadImageForm from './UploadImageForm/UploadImageForm'

const CreateAd = React.createClass({
    render() {
        return(
            <div>
                <h1>CreateAd</h1>
                <UploadImageForm/>
            </div>
        )
    }
})

module.exports = CreateAd;