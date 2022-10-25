
import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalContext = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({id: 1, name: "Dustin Jensen"});

    const addToCart = (prod) => {
        let found = false;
        
        let cartCopy = [...cart];
        for (let i = 0; i < cartCopy.length; i++) {
            let item = cartCopy[i];
            if (item._id === prod._id) {
                item.quantity += prod.quantity;
                found = true;
            }
        }
    if (!found) {
        cartCopy.push(prod);
    }
    
    setCart(cartCopy);    
    };

    const removeProd = (prodId) => {
      setCart([cart.filter(p=>p._id !== prodId)])

    };
    
    const clearCart = () => {
    };

    return (
        <StoreContext.Provider value={{
            cart:cart,
            user:user,
            addToCart:addToCart,
            removeFromCart: removeProd,
            clearCart: clearCart
        
        }}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default GlobalContext;