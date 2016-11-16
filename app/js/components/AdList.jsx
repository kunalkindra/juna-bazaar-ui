import React  from 'react';
import ProductItem from './ProductItem'
import ServiceManager from '../serviceManager/ServiceManager'
import Pagination from "react-js-pagination"

class AdList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "products": [],
            "pagination":{
                "activePage": 1,
                "itemsCountPerPage": 10,
                "totalItemsCount": 0,
                "pageRangeDisplayed": 3
            }
        };
    }

    componentWillMount() {
        this.loadProducts(this.state.pagination.activePage);
    }

    handlePageChange(pageNumber) {
        this.loadProducts(pageNumber);
    }

    constructProductLoadUrl(pageNumber){
        return {
            "size": this.state.pagination.itemsCountPerPage,
            "page": pageNumber - 1,
            "sort": "id,desc"
        }
    }

    loadProducts(pageNumber) {
        ServiceManager
            .exec('LOAD_ADS', {"data" : this.constructProductLoadUrl(pageNumber)})
            .then((response) => {
                const paginationObj = {
                    "activePage": response.data.number + 1,
                    "itemsCountPerPage": this.state.pagination.itemsCountPerPage,
                    "totalItemsCount": response.data.totalElements,
                    "pageRangeDisplayed": this.state.pagination.pageRangeDisplayed
                }

                this.setState(Object.assign({}, this.state, {
                    "products" : response.data.content,
                    "pagination" : paginationObj
                }));
            })
            .catch(function(e){
                console.log(e);
            });
    }

    render() {
        return (
            <div className="container">

                <table align="center" className="table table-striped">
                    <tr>
                        <th width="8%">Product Image</th>
                        <th width="5%">Product Id</th>
                        <th width="15%">Product Title</th>
                        <th width="15%">Product Description</th>
                        <th width="5%">Product Price</th>
                        <th width="5%">Product Location</th>
                    </tr>
                    {this.state.products.map((product) => {
                        return <ProductItem id={product.id}
                                      title={product.title}
                                      description={product.description}
                                      price={product.price}
                                      cityName={product.cityName}
                                      imageUrl={product.imageUrl} />
                    })}

                </table>

                <Pagination
                    activePage={this.state.pagination.activePage}
                    itemsCountPerPage={this.state.pagination.itemsCountPerPage}
                    totalItemsCount={this.state.pagination.totalItemsCount}
                    pageRangeDisplayed={this.state.pagination.pageRangeDisplayed}
                    onChange={(data) => this.handlePageChange(data)} />
            </div>
        )
    }
}
module.exports = AdList;