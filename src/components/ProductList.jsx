import { useContext } from "react";
import { CartContext } from "./CartContext";
import Product from "./Product";

import "./ProductList.css";
const ProductList = () => {
    const { products } = useContext(CartContext);
    return (
    
    <div className="product-list">
      <h1>Available Products</h1>
      <div className="product-container">
          {
              products.map((product) => (
                  <Product key={product.id} product={product}/>
              ))
          }
      </div>
    </div>
  );
}
export default ProductList;