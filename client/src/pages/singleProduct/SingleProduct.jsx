import React from "react";
import "./singleProduct.scss";

const SingleProduct = () => {
  return (
    <div className="singleProduct w-main">
      <div className="row">
        <div className="col-9">
          <div className="col-6 product-image">
            <div className="image">
              <img src="/pants1.jpeg" alt="" />
            </div>
          </div>
          <div className="col-6 product-content">
            <h1>Basic Colored Sweatpants With Elastic Hems</h1>
            <div className="review">
              <div className="star">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
              <p>2 reviews</p>
            </div>
            <span>
              <del>$25.90</del> $19.90
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span>Color: Black</span>
            <div className="color">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default SingleProduct;
