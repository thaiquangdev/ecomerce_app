import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { navbar } from "../../utils/data";

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="header-img">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="header-input">
          <form action="" className="search-form">
            <button className="btn-search">
              <ion-icon name="search-outline"></ion-icon>
            </button>
            <input type="text" placeholder="Search your favorite product" />
            <select name="" id="">
              <option value="select-category">Select-Category</option>
            </select>
          </form>
        </div>
        <div className="header-button">
          <div>
            <ion-icon name="person-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <div className="header-cart">
            <span>$0.00</span>
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>
      </div>

      {/* Navbar */}

      <div className="navbar-wrapper">
        <div className="navbar">
          <div className="dropdown-toggle">
            <Link to="#">All Categories</Link>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
          <div className="list-menu">
            <ul>
              {navbar.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
