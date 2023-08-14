import Products from "./products";
import Navbar from "./navbar";
import { useState } from "react";
import ProductsContext from "../contexts/productsContext";

const App = () => {
    const [products, setProducts] = useState([{id : 1, count: 22, ProductName: 'laptop'}, 
    {id : 2, count: 55, ProductName: 'mobile'},
    {id : 3, count: 11, ProductName: 'airpod'}]);

    return (  
        <>
        <ProductsContext.Provider value = {{products :products, 
                                            onIncrement : handleIncrement,
                                            onDecrement : handleDecrement,
                                            onDelete : handleDelete,
                                            onReset : handleReset}}>
            <Navbar/>
            <Products />
        </ProductsContext.Provider>
        </>
    );

    function handleIncrement (productID) {
        const newProducts = [...products];
        const index = newProducts.findIndex(p => p.id === productID);
        newProducts[index].count += 1;
        setProducts(newProducts);
    }

    function handleDecrement (productID) {
        const newProducts = [...products];
        const index = newProducts.findIndex(p => p.id === productID);
        newProducts[index].count -= 1;
        setProducts(newProducts);
    }

    function handleDelete(productId) {
        console.log(productId);
        const newPrducts = products.filter(p => p.id !== productId);
        setProducts(newPrducts);    
    } 

    function handleReset(){
        const p = products;
        const newProducts = p.map(p => {p.count = 0;
                                        return p});
        setProducts(newProducts);
    }
}
 
export default App;