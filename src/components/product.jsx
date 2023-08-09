import './product.css'
import React, { Component } from 'react';

class Product extends Component {
    state = {  
        count : this.props.count ,
        productName : this.props.ProductName
    } 
    render() { 
        return (
            <div>
             <span className="m-2 text-info" >{this.state.productName}</span>
             <span className="m-2 badge bg-primary">{this.state.count === 0 ? 'zero' : this.state.count}</span>
             <button onClick = {this.handleIncrement} className="m-2 btn btn-sm btn-success">+</button>
             <button onClick = {this.handleDecrement} className="m-2 btn btn-sm btn-warning">-</button>
             <button onClick={this.handleDelete} className="m-2 btn btn-sm btn-danger">delete</button>    
            
         </div>
        );
    }

    
    handleIncrement = () => {
        const {count} = this.state;
        this.setState({count : count + 1});
    }

    handleDecrement = () => {
        const {count} = this.state;
        this.setState({count : count - 1});   
    }

    handleDelete = () => {
        this.setState({count : 0});
    }

    
}
 
export default Product;

