import {createContext} from 'react';
const ProductsContext = createContext(
    {
        products: [],
        onDetele: ()=>{},
        onIncrement: ()=>{},
        onDecrement: ()=>{},
        onReset: ()=>{}
    }
);

export default ProductsContext;