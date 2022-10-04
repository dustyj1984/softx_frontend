import "./product.css";
import Quantity from "./quantity";

const Product = () => {
    return (
        <div className="product">
          <div className="img">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="title">
            <h5>AI Solutions</h5>
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