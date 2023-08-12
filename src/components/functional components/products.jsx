import { useState } from "react";
import Product from "./product";


const Products = () => {

    const [products, setProducts] = useState([{id : 1, count: 22, ProductName: 'laptop'}, 
    {id : 2, count: 55, ProductName: 'mobile'},
    {id : 3, count: 11, ProductName: 'airpod'}])
    return ( 
        <>
        {products.map((p,index) => <Product onDelete = {onDelete} id = {p.id} key={index} count = {p.count} ProductName = {p.ProductName} />)}
        </>
     );

     function onDelete(productId) {
        console.log(productId);
        const newPrducts = products.filter(p => p.id !== productId);
        setProducts(newPrducts);
     } 
}
 
export default Products;