import React from 'react';
import UploadImageForm from './UploadImageForm/UploadImageForm'
import ServiceManger from "../serviceManager/ServiceManager";
import {FormGroup, FormControl, Button} from "react-bootstrap";

class CreateAd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            price: 0,
            cities: [],
            cityId : '',
            categoryId : '',
            mobileNo: '',
            categoryList: [],
            imageUrls: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onImagesAdded = this.onImagesAdded.bind(this);
    }

    componentWillMount() {
        this.prePopulateCategories();
        this.prePopulateCities();
    }

    prePopulateCategories(){
        ServiceManger
            .exec('GET_CATEGORIES',{"data":""})
            .then(
                (response) => {
                    console.log("on success");
                    var data = response.data;
                    this.setState(Object.assign({}, this.state, { categoryList : data}));

                },
                (error) => {
                    alert(error.response.data.errorMessage)
                }
            )
    }

    prePopulateCities(){
        ServiceManger
            .exec('GET_CITIES',{"data":""})
            .then(
                (response) => {
                    console.log("on success");
                    var data = response.data;
                    this.setState(Object.assign({}, this.state, { cities : data}));
                },
                (error) => {
                    alert(error.response.data.errorMessage)
                }
            )
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
        if (this.state.imageUrls.length > 0) {
            var data = this.getFormData();
            ServiceManger
                .exec('POST_ADD', {"data": data})
                .then((response) => {
                    console.log("on success");
                    alert("Product Added Successfully");
                },
                    (error) => {
                        alert(error.response.data.errorMessage)
                    }
                )

            return;
        } else {
            alert("Please fill all the fields.");
        }
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
            <div role="form" className="container">
                <h1 className="well">Create Ad</h1>
                <div className="form-group col-md-6">
                    <label for="title">Title:</label>
                    <input type="text" id="title" className="form-control" onChange={this.handleChange.bind(this, 'title')}/> <br />
                    <label for="description">Description:</label>
                    <textarea rows="4" cols="20" id="description" className="form-control"
                              onChange={this.handleChange.bind(this, 'description')}/> <br />
                    <label for="price">Price:</label>
                    <input type="number" id="price" className="form-control" onChange={this.handleChange.bind(this, 'price')}/> <br />
                    <label for="city">City:</label>

                    <select id="city" className="form-control" onChange={this.handleChange.bind(this,'cityId')}>
                        {
                            this.state.cities.map((cityObj) => {
                                return <option value={cityObj.id}>{cityObj.name}</option>
                            })
                        }

                    </select>
                      <br />
                    <label for="mobile">Mobile Number:</label>
                    <input type="text" id="mobileNo" className="form-control" onChange={this.handleChange.bind(this, 'mobileNo')}/> <br />
                    <label for="category">Category:</label>
                    <select id="category" className="form-control" onChange={this.handleChange.bind(this,'categoryId')}>
                        {
                            this.state.categoryList.map((categoryObj) => {
                                return <option value={categoryObj.id}>{categoryObj.name}</option>
                            })
                        }
                    </select>
                    <br />
                    <UploadImageForm callbackOnImagesAdded={this.onImagesAdded}/>
                    {/*<input type="submit" value="Submit" className={"form-control btn btn-primary prodSubmitBtn"} onClick={this.handleSubmit}/>*/}

                    {/*<div className="col-md-6 col-md-offset-3">*/}
                        <FormGroup>
                            <Button bsStyle="primary" onClick={this.handleSubmit}>Save Add</Button>
                        </FormGroup>
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

module.exports = CreateAd;