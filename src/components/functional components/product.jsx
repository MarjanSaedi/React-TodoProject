import {useState} from 'react';

const Product = ({count : pCount , ProductName, id, onDelete}) => {
    
    const [count, setCount]  = useState(pCount);
    
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
        setCount(count + 1);
    }

    function handleDecrement() {
        setCount(count - 1);  
    }

    function handleDelete() {
        setCount(0);
        console.log(id);
        onDelete(id);
    }
}
 
export default Product;