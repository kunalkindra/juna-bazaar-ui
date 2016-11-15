/**
 * Created by surir on 11/15/16.
 */
import React from 'react';
import CloudinaryImageUploader from '../CloudinaryImageUploader/CloudinaryImageUploader';

const UploadImageForm = React.createClass ({

    getInitialState() {
        return {
            count : 1
        }
    },

    addBtnClick() {
        let currentCount = this.state.count;
        if(currentCount < 6) {
            this.setState({
                count: ++currentCount
            })
        }
    },

    render(){
        let imgUploadBoxes = [];
        for(let i=0 ; i < this.state.count ; i++){
            imgUploadBoxes.push(<CloudinaryImageUploader/>)
        }
        return(

            <div>
                {imgUploadBoxes}
                <input type="button" onClick={this.addBtnClick} value="Add"/>
            </div>

        )
    }
})

export default UploadImageForm;