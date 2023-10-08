import React from "react";
import "./productCard.scss";

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
    </div>
  );
};

export default ProductCard;
