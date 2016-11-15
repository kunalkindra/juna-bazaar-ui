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
            imgSrc : url
        }
    }
    handleFileInputChange(e) {
       let that = this,
           file = e.target.files[0],
           formData = new FormData(),
           axiosConfig = {};

       formData.append('upload_preset', 'rz4hjmme');
       formData.append('file', file);

        axiosConfig = {
            data: formData
        }

        ServiceManger
            .exec('CLOUDINARY_UPLOAD', axiosConfig)
            .then((response) => {
                console.log("response----->", arguments);
                that.setState({
                    imgSrc: response.data.url
                });


            })

        // TODO to generate unique code
    }

    render(){
        return(
            <div>
                <img src={this.state.imgSrc} width="200px" />
                <input type="file" onChange={this.handleFileInputChange.bind(this)}/>
            </div>
        )
    }

}

export default CloudinaryImageUploader;