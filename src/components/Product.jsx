import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Product.css";

const Product = ({ product }) => {
  const { cartDispatch } = useContext(CartContext);
  
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => cartDispatch({type:"ADD", payload: product})}>Add to Cart</button>
    </div>
  );
}

export default Product;