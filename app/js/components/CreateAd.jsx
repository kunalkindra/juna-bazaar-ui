import React from 'react';
import UploadImageForm from './UploadImageForm/UploadImageForm'

class CreateAd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            price: 0,
            cityId: '',
            mobileNo: '',
            categoryId: '',
            imageUrls: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onImagesAdded = this.onImagesAdded.bind(this);
     }

    onImagesAdded(urls){
        this.state.imageUrls = urls;
    }

    handleChange(field, e) {
        var nextState = {};
        nextState[field] = e.target.value;
        this.setState(nextState);
    }

    handleSubmit(event) {
        //TODO ajax call
        alert(JSON.stringify(this.getFormData()));
    }

    getFormData() {
        var data = {
            title: this.state.title
            , description: this.state.description
            , price: this.state.price
            , cityId: this.state.cityId
            , mobileNo: this.state.mobileNo
            , categoryId: this.state.categoryId
            , imageUrls: this.state.imageUrls
        };
        return data;
    }

    render() {
        return (
            <div>
                <h1>CreateAd</h1>
                <form onSubmit={this.handleSubmit}>

                    <label for="title">Title:</label>
                    <input type="text" id="title" onChange={this.handleChange.bind(this, 'title')}/> <br />
                    <label for="description">Description:</label>
                    <textarea rows="4" cols="20" id="description"
                              onChange={this.handleChange.bind(this, 'description')}/> <br />
                    <label for="price">Price:</label>
                    <input type="number" id="price" onChange={this.handleChange.bind(this, 'price')}/> <br />
                    <label for="city">City:</label>

                    <select id="city">
                        <option value="pune">Pune</option>
                    </select>

                    <br />

                    <label for="mobile">Mobile Number:</label>
                    <input type="text" id="mobile" onChange={this.handleChange.bind(this, 'mobile')}/> <br />
                    <label for="category">Category:</label>
                    <select id="category">
                        <option value="electronics">Electronics</option>
                    </select>
                    <br />
                    <UploadImageForm callbackOnImagesAdded={this.onImagesAdded}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

module.exports = CreateAd;