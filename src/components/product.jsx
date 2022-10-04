import "./product.css";
import Quantity from "./quantity";

const Product = (props) => {
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
            <label>Price</label>
          </div>

          <Quantity />
          <div className="add"> 
            <button className="btn">Add</button>
          </div>  
        
        </div>
    );
    };
    export default Product;