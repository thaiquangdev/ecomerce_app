import React from "react";
import "./productCard.scss";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const { productData } = props;
  return (
    <div className="card">
      <Link to={`/product/${productData?._id}`}>
        <div className="card-img">
          <img src={productData?.images[0]} alt="" className="img-product" />
          <img
            src={productData?.images[1]}
            alt=""
            className="img-product-hover"
          />
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
        <div className="card-content">
          <p>
            <ion-icon name="star"></ion-icon> {productData?.ratings.length}{" "}
            reviews
          </p>
          <h3>{productData?.title}</h3>
          <span>
            {/* <del>$25.90</del> $19.90 */}${productData?.price}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
