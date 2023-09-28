import "./App.css";
import { useState,useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Cart from "./pages/cart";
import { Navbar} from './components/navbar'
import SingleProduct from './pages/singleproduct';
import AllProducts from './components/allproducts';
import Checkout from './pages/Checkout';


function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));


  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const [cart, setCart] = useState([]);

  const handleAddToCart= (product) => {
    const newProducts = [...cart,product]
    setCart(newProducts);
  };

  const handleRemove = (product) => {
    const newProducts = cart.filter (item => item.id !== product.id)
    setCart(newProducts);
  };

  const updateCartItem = (itemId, newQuantity) => {
    // Find the item in the cart by itemId and update its quantity
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCart(updatedCart);
  };
  return (
    <div>
      <Navbar token={token} setToken={setToken} />
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/cart" element={<Cart token={token} handleRemove={handleRemove} updateCartItem={updateCartItem} />} />
        <Route path="/all-products" element={<AllProducts handleAddToCart={handleAddToCart}/>} />
        <Route path="/products/:id" element={<SingleProduct />}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </div>
  )
}
export default App
