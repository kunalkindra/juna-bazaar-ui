import React from 'react';

class ProductItem extends React.Component {

    render() {
        return (
            <tr>
                <td width="10%">{this.props.id}</td>
                <td width="15%">{this.props.title}</td>
                <td width="30%">{this.props.description}</td>
                <td width="10%">{this.props.price}</td>
                <td width="10%">{this.props.cityName}</td>
            </tr>
        )
    }
}

module.exports = ProductItem;
