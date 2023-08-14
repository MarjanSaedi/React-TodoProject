import React, { Component } from 'react';
import ProductsContext from './contexts/productsContext';

class Navbar extends Component {
    static contextType = ProductsContext;
    render() { 
        return (
            <nav className='navbar navbar-light bg-light'>
                <div className='container-fluid'>
                    <a href='#' className='navbar-brand'> Navbar {this.calculateSum()} </a>
                </div>
            </nav>
        );
    }

     calculateSum = () =>{
        console.log('sum');
        let sum = 0;
        this.context.products.forEach(p => { 
            sum += p.count
        });
        return sum;
    }
}
 
export default Navbar;