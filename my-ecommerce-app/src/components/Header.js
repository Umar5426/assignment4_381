/*
=========================================================
Name : Header.js
Assignment : Assignment 4
Author(s) : Rayyan Ahmed, Muhammed Umar Khan
Submission : Mar 24, 2024
Description : Header component for my-ecommerce-app
=========================================================
*/

import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header-container">
      <div className="header-top">
        <img src="/images/logo.png" alt="Logo" className="logo" />
        <div className="company-name">Company Name</div>
      </div>
      <nav className="nav-links">
        <ul>
          <li className="first-link"><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li className="last-link"><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
