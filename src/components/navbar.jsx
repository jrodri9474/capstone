import React from 'react'
import { Link } from 'react-router-dom'

import "./navbar.css";


export const Navbar = () => {
  return (
    <div className="navbar">N
        <div className="links">
            <Link to="/cart">Basket</Link>
            <Link to="/Login">Login</Link>
            <Link to="/all-products">Products</Link>
        </div> 
    </div>
  )
};
