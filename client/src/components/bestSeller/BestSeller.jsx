import React, { useEffect, useState } from "react";
import "./bestSeller.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProductCard from "../productCard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getProducts } from "../../features/product/productSlice";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 5000,
};

const BestSeller = () => {
  const dispatch = useDispatch();
  const [bestSeller, setBestSeller] = useState([]);

  const getAllProducts = async () => {
    const products = await dispatch(getProducts());
    const productSeller = products.payload.productData.filter(
      (product) => product.sold > 50
    );
    setBestSeller(productSeller);
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="bestSeller">
      <div className="product">
        <div className="product-header">
          <h2>Best Seller Products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis.
          </p>
        </div>
        <div className="product-content">
          <div className="row">
            <Slider {...settings}>
              {bestSeller?.map((item) => {
                return (
                  <div className="col-3" key={item._id}>
                    <ProductCard productData={item} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="countdown">
        <div className="countdown-image">
          <img src="/banner-04.jpg" alt="" />
        </div>
        <div className="countdown-content">
          <h4>DEAL OF THE WEEK</h4>
          <h2>
            Roland Grand White <br /> short checkered T-shirt
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna.
          </p>
          <div className="countdown-time">
            <div className="countdown-item">
              <div className="days">00</div>
              <div className="count-label">d</div>
            </div>
            <span>:</span>
            <div className="countdown-item">
              <div className="hours">00</div>
              <div className="count-label">h</div>
            </div>
            <span>:</span>
            <div className="countdown-item">
              <div className="minutes">00</div>
              <div className="count-label">m</div>
            </div>
            <span>:</span>
            <div className="countdown-item">
              <div className="seconds">00</div>
              <div className="count-label">s</div>
            </div>
          </div>
          <div className="countdown-btn">
            <Link to="#" className="btn">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
