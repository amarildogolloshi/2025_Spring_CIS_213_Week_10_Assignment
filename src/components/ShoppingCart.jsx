import { useContext } from "react";
import { CartContext } from "./CartContext";

import "./ShoppingCart.css";

const ShoppingCart = () => { 

    const {cart, cartDispatch} = useContext(CartContext);
    
    const calculateTotal = () => {
        return Math.round(cart.reduce((total, item) => total + item.price * item.quantity, 0) * 100) / 100;
    };
    
    return (
        <div className="shopping-cart">
        <h1>Shopping Cart</h1>
            {  cart.length === 0 ? (
                <div className="cart-empty"> 

                    <p> Your Cart is empty</p>
                </div>
            ) : (
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-item-name-price">
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                            </div>
                            
                            <div className="cart-item-quantity">
                                <button  onClick={ () => cartDispatch( {type:"DECREMENT_QUANTITY", payload:item}) }>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={ () => cartDispatch( {type:"INCREMENT_QUANTITY", payload:item}) } >+</button>
                            </div>
                            
                            <button onClick={() => cartDispatch( { type: "REMOVE",  payload: item})}>Remove</button>
                        </div>
                    ))}
                    <div className="cart-total">Total: ${ calculateTotal()}</div>
                </div>
            )
            }
        </div>
    );
}
export default ShoppingCart;
