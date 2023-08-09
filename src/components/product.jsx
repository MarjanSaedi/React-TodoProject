import './product.css'
import React, { Component } from 'react';

class Product extends Component {
    state = {  
        count : 11 ,
        productName : "laptop"
    } 
    render() { 
        return (
            <>
             <span className="m-2 text-info" >{this.state.productName}</span>
             <span className="m-2 badge bg-primary">{this.state.count === 0 ? 'zero' : this.state.count}</span>
             <button onClick = {this.handleIncrement} className="m-2 btn btn-sm btn-success">+</button>
             <button onClick = {this.handleDecrement} className="m-2 btn btn-sm btn-warning">-</button>
             <button onClick={this.handleDelete} className="m-2 btn btn-sm btn-danger">delete</button>    
            
         </>
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

// const Product = () => {
    
//     const count = 5;
//         return ( 
//         <>
//             <span className="m-2 text-info" >Product name</span>
//             <span className="m-2 badge bg-primary">{count === 0 ? 'zero' : count}</span>
//             <button className="m-2 btn btn-sm btn-success">+</button>
//             <button className="m-2 btn btn-sm btn-warning">-</button>
//             <button className="m-2 btn btn-sm btn-danger">delete</button>
            
            
//         </>
//      );

// }
 
// export default Product;