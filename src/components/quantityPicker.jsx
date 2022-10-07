import { useState } from "react";
import "./quantityPicker.css";


const QuantityPicker=(props)=>{
  const [quantity, setQuantity] = useState(1);
    const increase = ()=>{
    
        let value = quantity + 1;    
        setQuantity(value);
        props.onChange(value);
    };
    const decrease = ()=>{
        if (quantity !== 1){
        let value = quantity - 1;
        setQuantity(value);
        props.onChange(value);
        }
    };
    
    return(
        <div className="quantity">
            <button className="btn" onClick={increase}>+</button>
            <label>{quantity}</label>
            <button className="btn" onClick={decrease}>-</button>
        </div>
    
    );
}

export default QuantityPicker;
