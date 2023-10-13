import React from "react";
import "./productCard.scss";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="card">
      <Link to="/product/:id">
        <div className="card-img">
          <img src="/pants1.jpeg" alt="" className="img-product" />
          <img src="/pants2.jpeg" alt="" className="img-product-hover" />
        </div>
        <div className="card-content">
          <p>
            <ion-icon name="star"></ion-icon> 2 reviews
          </p>
          <h3>Basic Colored Sweatpants With Elastic Hems</h3>
          <span>
            <del>$25.90</del> $19.90
          </span>
        </div>
        <div className="product-button">
          <ul>
            <li>
              <Link to="/whistlist">
                <ion-icon name="heart-outline"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to="/compare">
                <ion-icon name="expand-outline"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to="/zoom">
                <ion-icon name="swap-horizontal-outline"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to="#/cart">
                <ion-icon name="cart-outline"></ion-icon>
              </Link>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
