import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    state ={ products : [{id : 0, count: 2, ProductName: 'laptop'}, 
             {id : 1, count: 5, ProductName: 'mobile'},
             {id : 2, count: 11, ProductName: 'airpod'}]};
    render() { 
        return (
        <>
        {this.state.products.map((p, index) => <Product onDelete = {this.onDelete} id = {p.id} key = {index} count = {p.count} ProductName = {p.ProductName} /> )}
        </>
        );
    }

    onDelete = (productID)=> {
        console.log(productID)
        const newProducts = this.state.products.filter(p => p.id !== productID);
        console.log(newProducts);
        this.setState({products : newProducts});

    }
}
 
export default Products;