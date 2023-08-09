import { useState } from "react";
import Product from "./product";


const Products = () => {

    const [products, setProduct] = useState([{id : 1, count: 22, ProductName: 'laptop'}, 
    {id : 2, count: 55, ProductName: 'mobile'},
    {id : 3, count: 11, ProductName: 'airpod'}])
    return ( 
        <>
        {products.map((p,index) => <Product key={index} count = {p.count} ProductName = {p.ProductName} />)}
        </>
     );
}
 
export default Products;