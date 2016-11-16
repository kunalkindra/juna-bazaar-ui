import React from 'react';

class ProductItem extends React.Component {

    render() {
        return (
            <tr>
                <td width="8%"><img width="120px" src={this.props.imageUrl} /></td>
                <td width="5%">{this.props.id}</td>
                <td width="15%">{this.props.title}</td>
                <td width="15%">{this.props.description}</td>
                <td width="5%">{this.props.price}</td>
                <td width="5%">{this.props.cityName}</td>
            </tr>
        )
    }
}

module.exports = ProductItem;
