import './App.css'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
import { CartProvider } from './components/CartContext'

function App() {

  return (
    <CartProvider>
      <ProductList/>
      <ShoppingCart />
    </CartProvider>
  )
}

export default App