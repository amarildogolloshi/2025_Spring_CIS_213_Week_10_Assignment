import { createContext, useEffect, useReducer, useState } from "react";
import { PRODUCTS } from "../../public/data";
import { cartReducer, initialState } from "./CartReducer";

export const  CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cart, cartDispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {

        const loadProducts = async () => {
            try{
                setProducts(PRODUCTS);
                console.log('Products loaded:',  PRODUCTS);
            } catch (error) {
                console.error('Fetch products error:', error);
            }
        };

        loadProducts();
    }, []);
    
    
    return (
        <CartContext.Provider value={{ products, cart, cartDispatch }}>
        {children}
        </CartContext.Provider>
    );
}