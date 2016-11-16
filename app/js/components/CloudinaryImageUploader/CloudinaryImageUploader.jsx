/**
 * Created by surir on 11/15/16.
 */
import React from "react";
import ServiceManger from "../../serviceManager/ServiceManager";
import {cloudinaryConfig} from '../../configs/configs';

var url = require("file!../../../assets/images/imgPlaceholder.jpg");

class CloudinaryImageUploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl : url
        }
    }
    onImageAdded(){
        this.props.callbackImageAdded(this.state.imgUrl);
    }
    handleFileInputChange(e) {
        let that = this,
            file = e.target.files[0],
            data = {
                upload_preset: 'rz4hjmme',
                file: file
            }
        ServiceManger
            .exec('CLOUDINARY_UPLOAD', {data: data}, true)
            .then((response) => {
                that.setState({
                    imgUrl: response.data.url
                });
                this.onImageAdded();
            })

        // TODO to generate unique code
    }

    render(){
        return(
            <div>
                <img src={this.state.imgUrl} width="200px" />
                <input type="file" onChange={this.handleFileInputChange.bind(this)} />
            </div>
        )
    }
}

export default CloudinaryImageUploader;
