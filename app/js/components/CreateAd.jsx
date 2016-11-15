import React from 'react';

class CreateAd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {city: '', mobile : '', price : 0};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <label for="title">Title:</label>  <input type="text" id="title" /> <br />
                <label for="description">Description:</label>  <textarea rows="4" cols="20" id="description" /> <br />
                <label for="price">Price:</label>  <input type="number" id="price" /> <br />
                <label for="city">City:</label>
                <select id="city">
                    <option value="pune">Pune</option>
                </select>

                <br />

                <label for="mobile">Mobile Number:</label>  <input type="number" id="mobile" /> <br />
                <label for="category">Category:</label>
                <select id="category">
                    <option value="electronics">Electronics</option>
                </select>
                <br />
                <input type="submit" value="Submit" />
                <input type="text" value={this.state.price} onChange={this.handleChange() />
            </form>
        );
    }
}

module.exports = CreateAd;