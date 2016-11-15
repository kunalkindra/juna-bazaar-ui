import React from 'react';
import {Link} from 'react-router'
import ProductItem from './ProductItem'
import ServiceManager from '../serviceManager/ServiceManager'

class AdList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "products": []
        }
    }

    componentWillMount() {
        ServiceManager
            .exec('LOAD_ADS')
            .then((response) => {
                var productObj = {
                    "products" : response.data.content
                }
                this.setState(productObj);
            })
            .catch(function(e){
              console.log(e);
            });
    }

    render() {
        console.log("Products",this.state.products);
        return (
            <div className="container">
                <table align="center">
                    <tr>
                        <th width="10%">Product Id</th>
                        <th width="15%">Product Title</th>
                        <th width="30%">Product Description</th>
                        <th width="10%">Product Price</th>
                        <th width="10%">Product Location</th>
                    </tr>
                    {this.state.products.map((product) => {
                        return <ProductItem id={product.id}
                                      title={product.title}
                                      description={product.description}
                                      price={product.price}
                                      cityName={product.cityName}/>
                    })}
                </table>
            </div>
        )
    }
}

module.exports = AdList;