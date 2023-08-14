import { useState } from "react";
import Product from "./product";
import ProductsContext from "../contexts/productsContext";
import { useContext } from "react";


const Products = () => {
    const productsContext = useContext(ProductsContext);
    return ( 
        <>
        <button className="btn btn-primary" onClick={handleReset}>Reset</button>
        {productsContext.products.map((p,index) => <Product 
         id = {p.id} key={index} count = {p.count} ProductName = {p.ProductName} />)}
        </>
     );

     function handleIncrement (productID) {
        productsContext.onIncrement(productID);
    }

    function handleDecrement (productID) {
        productsContext.onDecrement(productID);
    }

     function handleDelete(productID) {
        productsContext.onDelete(productID);    
     } 
     function handleReset(){
        productsContext.onReset();
    }
}
 
export default Products;