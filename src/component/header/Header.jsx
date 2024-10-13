import React from 'react';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <Link className="navbar-brand" to="/">C-Mart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex m-auto" role="search">
              <input className="field" type="search" placeholder="Product name, category name, etc." aria-label="Search" />
              <button className="btn-outline-success" id="search" type="submit">Search</button>
            </form>
            <div className="my-2 my-lg-0">
              <button className="btnn"><Link to="/login">Login</Link></button>
            </div>
            <div className="my-2 my-lg-0">
              <Link to="/Cart" className="cart"><ShoppingCartIcon /></Link>
            </div>
          </div>
        </nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/allproduct">All Products</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Women</Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/WomenAllProducts">All Products</Link>
              <Link className="dropdown-item" to="/Dresses">Dresses</Link>
              <Link className="dropdown-item" to="/Pants">Pants</Link>
              <Link className="dropdown-item" to="/Skirts">Skirts</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Men</Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/MenAllProducts">All Products</Link>
              <Link className="dropdown-item" to="/MenShirts">Shirts</Link>
              <Link className="dropdown-item" to="/MenPants">Pants</Link>
              <Link className="dropdown-item" to="/MenHoodies">Hoodies</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Kids">Kids</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
