import { useState } from "react";
import Product from "./product";


const Products = ({products, onReset, onIncrement,onDecrement, onDelete }) => {

    return ( 
        <>
        <button className="btn btn-primary" onClick={handleReset}>Reset</button>
        {products.map((p,index) => <Product onIncrement = {handleIncrement} onDecrement = {handleDecrement}
         onDelete = {handleDelete}
         id = {p.id} key={index} count = {p.count} ProductName = {p.ProductName} />)}
        </>
     );

     function handleIncrement (productID) {
        onIncrement(productID);
    }

    function handleDecrement (productID) {
        onDecrement(productID);
    }

     function handleDelete(productID) {
        onDelete(productID);    
     } 
     function handleReset(){
        onReset();
    }
}
 
export default Products;