import "./cart.css";
import { useContext } from "react";
import StoreContext from "../state/storeContext";
import ProductInCart from "../components/productinCart";

const Cart = () => {
    const cart = useContext(StoreContext).cart;

    const getCount = () => {
        let count = 0;
        for (let i = 0; i < cart.length; i++) {
            count += cart[i].quantity;
        }
        return count;
    };
    const getTotal = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price * cart[i].quantity;

        }
        return "$" + total.toFixed("2");
    
    };
    return (
    <div className="cart">
        <h1 className="header">One more step to get your software</h1>
        <h5 className="subheader">We have {getCount()} products ready for you</h5>

        <div className="parent">
            <div className="products">
                <ul>
                    {cart.map((prod => <ProductInCart key={prod._id} data={prod} />))}
                
                </ul>
            </div>
        
            <div className="total">
                <h3>Total</h3>
                <h5 className="header">Your total is ${getTotal()}</h5>
                <button className="btn btn-primary">BUY NOW</button>
            </div>
        </div>

    </div>

    
    );
};
export default Cart;