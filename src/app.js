import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Products from "./components/products";

class App  extends Component {
    state ={ products : [{id : 0, count: 2, ProductName: 'laptop'}, 
             {id : 1, count: 5, ProductName: 'mobile'},
             {id : 2, count: 11, ProductName: 'airpod'}]};

    render () {
        return ( 
            <>
            <Navbar products = {this.state.products}/>
            <Products products = {this.state.products} handleDecrement = {this.handleDecrement}
                                    handleIncrement= {this.handleIncrement} handleReset={this.handleReset}
                                    HandleDelete = {this.HandleDelete} />
            </>
        );
    }

    handleIncrement = (productID) => {
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex(p => p.id === productID);
        newProducts[index].count += 1;
        this.setState({products : newProducts});
    }

    handleDecrement = (productID) => {
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex(p => p.id === productID);
        newProducts[index].count -= 1;
        this.setState({products : newProducts});
    }

    HandleDelete = (productID)=> {
        const newProducts = this.state.products.filter(p => p.id !== productID);
        this.setState({products : newProducts});

    }

    handleReset = () => {
        const newProducts = this.state.products.map(p => {p.count = 0;
                                                         return p;});
        this.setState({products : newProducts});
    }
}
 
export default App;