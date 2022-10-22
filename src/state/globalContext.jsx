
import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalContext = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({id: 1, name: "Dustin Jensen"});

    const addToCart = (prod) => {
        setCart([...cart, prod]);
        

    };

    const removeProd = () => {
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