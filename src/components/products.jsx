import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    state ={ products : [{id : 1, count: 2, ProductName: 'laptop'}, 
             {id : 2, count: 5, ProductName: 'mobile'},
             {id : 3, count: 11, ProductName: 'airpod'}]};
    render() { 
        return (
        <>
        {this.state.products.map((p, index) => <Product key = {index} count = {p.count} ProductName = {p.ProductName} /> )}
        </>
        );
    }
}
 
export default Products;