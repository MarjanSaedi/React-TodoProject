import { useContext } from "react";
import ProductsContext from "../contexts/productsContext";

const Product = ({count, ProductName, id}) => {
    const productsContext = useContext(ProductsContext);
    
    return ( 
        <div>
             <span className="m-2 text-info" >{ProductName}</span>
             <span className="m-2 badge bg-primary">{count === 0 ? 'zero' : count}</span>
             <button onClick = {handleIncrement} className="m-2 btn btn-sm btn-success">+</button>
             <button onClick = {handleDecrement} className="m-2 btn btn-sm btn-warning">-</button>
             <button onClick={handleDelete} className="m-2 btn btn-sm btn-danger">delete</button>    
            
         </div>
     );

     function handleIncrement() {
        productsContext.onIncrement(id);
    }

    function handleDecrement() {
        productsContext.onDecrement(id);  
    }

    function handleDelete() {
        productsContext.onDelete(id);
    }
}
 
export default Product;