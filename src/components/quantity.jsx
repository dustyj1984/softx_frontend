import { useState } from "react";
import "./quantity.css";

const Quantity=()=>{
  const [qty, setQty] = useState(1);
    const increase = ()=>{
    
        let value = qty + 1;    
        setQty(value);
    };
    const decrease = ()=>{
        if (qty !== 1){
        let value = qty - 1;
        setQty(value);
        }
    };
    
    return(
        <div className="quantity">
            <button className="btn" onClick={increase}>+</button>
            <label>{qty}</label>
            <button className="btn" onClick={decrease}>-</button>
        </div>
    
    );
}

export default Quantity;
