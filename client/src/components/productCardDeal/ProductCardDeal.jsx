import React from "react";
import "./productCardDeal.scss";
import { Link } from "react-router-dom";

const ProductCardDeal = ({ data }) => {
  // const stars = [];
  // const ratings = data?.ratings.star;
  // for (let i = 0; i < starCount; i++) {
  //   stars.push(<ion-icon name="star" key={i}></ion-icon>);
  // }
  // console.log(ratings);
  return (
    <div className="productCardDeal">
      <Link to={`/product/${data?._id}`}>
        <div className="row">
          <div className="col-5">
            <div className="product-image">
              <img src={data?.images[0]} alt="" />
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
            </div>
          </div>
          <div className="col-7">
            <div className="product-content">
              <h3 className="product-title">{data?.title}</h3>
              <span className="price">${data?.price}</span>
              <div className="product-rating">
                <span>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </span>
                <p>
                  {data?.ratings.length}
                  reviews
                </p>
              </div>
              <p className="product-des">{data?.description}</p>
              <div className="product-coundown">
                <p>Offer end in:</p>
                <div className="countdown">
                  <div className="countdown-item">
                    <div className="days">00</div>
                  </div>
                  <span>:</span>
                  <div className="countdown-item">
                    <div className="hours">00</div>
                  </div>
                  <span>:</span>
                  <div className="countdown-item">
                    <div className="minutes">00</div>
                  </div>
                  <span>:</span>
                  <div className="countdown-item">
                    <div className="seconds">00</div>
                  </div>
                </div>
              </div>
              <div className="sold-product">
                <p>
                  Available: 39 - sold: <strong>60</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCardDeal;
