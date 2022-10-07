import { useState } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";


const Product = (props) => {
  const [quantity,setQuantity] = useState(1);
  const handleQuantityChange = (qty) => {
  setQuantity(qty);
    
  }

  const getTotal = () => {
    const total = quantity * props.data.price;
    return total.toFixed("2");


  
  }
    return (
        <div className="product">
          <div className="img-fluid">
            <img src={"/img/" + props.data.image} alt="" />
          </div>
          <div className="title">
            <h5>{props.data.title}</h5>
          </div>
          <div className="total">
            <label>Total</label>
          </div>
          <div className="price">
            <label className="price" >${props.data.price.toFixed("2")}</label>
          </div>

          <QuantityPicker onChange={handleQuantityChange}/>
          <div className="add"> 
            <button className="btn">Add</button>
          </div>  
        
        </div>
    );
    }
    export default Product;