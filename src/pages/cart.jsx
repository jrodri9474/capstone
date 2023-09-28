
import { Link } from "react-router-dom";


function Cart({cart, handleRemove}) {


  const calculateTotal = () => {
    if (!cart || !Array.isArray(cart)) {
      return 0;
    }
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {!cart || !Array.isArray(cart) || cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              
             
              <button
                className="update-button"
                onClick={() => updateCartItem(item.id, item.quantity + 1)}
              >
                +1
              </button>
              <button
                className="update-button"
                onClick={() => updateCartItem(item.id, item.quantity - 1)}
                disabled={item.quantity === 1} 
              >
                -1
              </button>
              
              
              <button
                className="remove-button"
                onClick={() => handleRemove(item)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
          </div>
          <Link to="/checkout"> 
          <button className="checkout-button">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
