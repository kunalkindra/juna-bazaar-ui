/**
 * Created by surir on 11/15/16.
 */
import React from "react";
import CloudinaryImageUploader from "../CloudinaryImageUploader/CloudinaryImageUploader";
import {FormGroup, FormControl, Button} from "react-bootstrap";

const UploadImageForm = React.createClass({

    getInitialState() {
        return {
            count: 1,
            imgUrls: [],
            addButtonVisibility: true
        }
    },

    addBtnClick() {
        let currentCount = this.state.count;
        if (currentCount < 6) {
            this.setState({
                count: ++currentCount
            })
        } else {
            this.setState({
                    addButtonVisibility: false
                }
            )
        }
    },

    onImageAdded: function (urls) {
        this.state.imgUrls.push(urls);
        this.props.callbackOnImagesAdded(this.state.imgUrls);
    },

    render(){
        let imgUploadBoxes = [];
        for (let i = 0; i < this.state.count; i++) {
            imgUploadBoxes.push(<CloudinaryImageUploader callbackImageAdded={this.onImageAdded}/>)
        }
        return (

            <div>
                {imgUploadBoxes}
                {
                    this.state.addButtonVisibility
                        ? <FormGroup>
                            <Button bsStyle="primary" onClick={this.addBtnClick}>Add More Image</Button>
                        </FormGroup>
                        : null
                }
            </div>
        )
    }
})

export default UploadImageForm;

// <input type="button" className="col-md-6" onClick={this.addBtnClick} value="Add More Image" id="addImageButtonId"/>