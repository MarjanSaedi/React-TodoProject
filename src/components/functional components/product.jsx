const Product = ({count, ProductName, id, onDelete, onIncrement, onDecrement}) => {
        
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
        onIncrement(id);
    }

    function handleDecrement() {
        onDecrement(id);  
    }

    function handleDelete() {
        onDelete(id);
    }
}
 
export default Product;