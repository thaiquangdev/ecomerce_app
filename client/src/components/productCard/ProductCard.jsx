import React from "react";
import "./productCard.scss";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img src="/pants1.jpeg" alt="" />
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
            <Link to="#">
              <ion-icon name="heart-outline"></ion-icon>
            </Link>
          </li>
          <li>
            <Link to="#">
              <ion-icon name="expand-outline"></ion-icon>
            </Link>
          </li>
          <li>
            <Link to="#">
              <ion-icon name="swap-horizontal-outline"></ion-icon>
            </Link>
          </li>
          <li>
            <Link to="#">
              <ion-icon name="cart-outline"></ion-icon>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
