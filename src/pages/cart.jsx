import "./cart.css";
import { useContext } from "react";
import StoreContext from "../state/storeContext";

const Cart = () => {
    const cart = useContext(StoreContext).cart;
    return (
    <div className="cart">
        <h1 className="header">One more step to get your software</h1>
        <h5 className="header">We have 6 products ready for you</h5>

        <div className="products">
            <ul>
                {cart.map( p => <li key={p._id}>{p.title} - {p.quantity} </li>)}
            </ul>

        </div>
    </div>


    
    );
};
export default Cart;