import './product.css'
import React, { Component } from 'react';

class Product extends Component {
   
    render() { 
        return (
            <div>
             <span className="m-2 text-info" >{this.props.ProductName}</span>
             <span className="m-2 badge bg-primary">{this.props.count === 0 ? 'zero' : this.props.count}</span>
             <button onClick = {this.handleIncrement} className="m-2 btn btn-sm btn-success">+</button>
             <button onClick = {this.handleDecrement} className="m-2 btn btn-sm btn-warning">-</button>
             <button onClick={this.handleDelete} className="m-2 btn btn-sm btn-danger">delete</button>                
         </div>
        );
    }

    handleIncrement = () => {
        this.props.onIncrement(this.props.id);
    }

    handleDecrement = () => {
        this.props.onDecrement(this.props.id)  
    }

    handleDelete = () => {
        this.props.onDelete(this.props.id);
    }    
}
 
export default Product;

