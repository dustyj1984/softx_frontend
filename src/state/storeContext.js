import {createContext} from 'react';



let StoreContext = createContext({
    cart: [],
    user: {},
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},

});


export default StoreContext;