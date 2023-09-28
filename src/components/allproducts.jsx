import React from 'react';
import { Link } from "react-router-dom";
import "./Products.css";
import { useState,useEffect } from 'react';


export const Products = ({ handleAddToCart }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAll() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchAll();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>All Products</h2>
      <div className="product-container">
        {data.map((product) => (
          <div className="product" key={product.id}>
            <Link to={`/products/${product.id}`} className="product-link">
              <img src={product.image} alt={product.title} />
            </Link>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product)} 
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

  
  
  
  
  
  
  
  
  
  