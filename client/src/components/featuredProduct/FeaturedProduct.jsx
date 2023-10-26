import React, { useEffect, useState } from "react";
import "./featuredProduct.scss";
import ProductCard from "../productCard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { getProducts } from "../../features/product/productSlice";
import { useDispatch } from "react-redux";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 5000,
};

const FeaturedProduct = () => {
  const dispatch = useDispatch();
  const [featuredProduct, setFeaturedProduct] = useState([]);

  const getAllProducts = async () => {
    const products = await dispatch(getProducts());
    const productFeature = products.payload.productData.filter((product) =>
      product.tags.some((tag) => tag === "featured-product")
    );
    setFeaturedProduct(productFeature);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="featuredProduct">
      <div className="header">
        <div className="row">
          <div className="col-12">
            <h2>Featured Products</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas
            </span>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="row">
          <Slider {...settings}>
            {featuredProduct?.map((item) => {
              return (
                <div className="col-3" key={item._id}>
                  <ProductCard productData={item} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="featured-banner">
        <div className="row">
          <div className="col-6">
            <div className="banner-inner">
              <div className="banner-image">
                <img src="/banner-05.jpg" alt="" />
                <div className="banner-content">
                  <h4>NEW SEASON</h4>
                  <h2>
                    Show your best <br /> jewellery of your life
                  </h2>
                  <p>Don't miss the opportunity.</p>
                  <Link to="#">
                    Shop Now <ion-icon name="arrow-forward-outline"></ion-icon>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner-inner">
              <div className="banner-image">
                <img src="/banner-06.jpg" alt="" />
                <div className="banner-content">
                  <h4>NEW SEASON</h4>
                  <h2>
                    Big patterns are <br /> back in fashion
                  </h2>
                  <p>Don't miss the opportunity.</p>
                  <Link to="#">
                    Shop Now <ion-icon name="arrow-forward-outline"></ion-icon>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
