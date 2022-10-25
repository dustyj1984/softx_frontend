
import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import StoreContext from "../state/storeContext";


const Product = (props) => {

  const [quantity,setQuantity] = useState(1);
  const addToCart = useContext(StoreContext).addToCart;
  const handleQuantityChange = (qty) => {
  setQuantity(qty);
    
  }

  const getTotal = () => {
    const total = quantity * props.data.price;
    return total.toFixed("2");


  
  };

  const handleAdd = () => {
    let pForCart = {...props.data, quantity: quantity};
    addToCart(pForCart);

  };

    return (
        <div className="product">
          <div className="img-fluid">
            <img src={"/img/" + props.data.image} alt="" />
          </div>
          <div className="title">
            <h5>{props.data.title}</h5>
          </div>
          <div className="total">
            <label>Total: ${getTotal()}</label>
          </div>
          <div className="price">
            <label className="price" >${props.data.price.toFixed(2)}</label>
          </div>

          <QuantityPicker onChange={handleQuantityChange}/>
          <div className="add"> 
            <button onClick={handleAdd} className="btn">Add</button>
          </div>  
        
        </div>
    );
    }
    export default Product;