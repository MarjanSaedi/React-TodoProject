import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    
    render() { 
        return (
        <>
        <button className='btn btn-primary' onClick={this.handleReset}>Reset</button>
        {this.props.products.map((p, index) => <Product onDelete = {this.HandleDelete}
         onIncrement = {this.handleIncrement} onDecrement = {this.handleDecrement} 
         id = {p.id} key = {index} count = {p.count} ProductName = {p.ProductName} /> )}
        </>
        );
    }

    handleIncrement = (productID) => {
        this.props.handleIncrement(productID);
    }

    handleDecrement = (productID) => {
        this.props.handleDecrement(productID);
    }

    HandleDelete = (productID)=> {
        this.props.HandleDelete(productID);
    }

    handleReset = () => {
       this.props.handleReset();
    }
}
 
export default Products;