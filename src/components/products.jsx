import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    render() { 
        return (
        <>
        <Product productName = 'laptop'/>
        <Product productName = 'tablet'/>
        <Product productName = 'mobile'/>
        </>
        );
    }
}
 
export default Products;