import React, { Component } from 'react';
import Product from './product';
import ProductsContext from './contexts/productsContext';

class Products extends Component {
    static contextType = ProductsContext;
    render() { 
        
        return (
        <>
        <button className='btn btn-primary' onClick={this.handleReset}>Reset</button>
        {this.context.products.map((p, index) => <Product  
         id = {p.id} key = {index} count = {p.count} ProductName = {p.ProductName} /> )}
        </>
        );
    }

    handleIncrement = (productID) => {
        this.context.onIncrement(productID);
    }

    handleDecrement = (productID) => {
        this.context.onDecrement(productID);
    }

    HandleDelete = (productID)=> {
        this.context.onDelete(productID);
    }

    handleReset = () => {
       this.context.onReset();
    }
}
 
export default Products;