import React from "react";
import "./featuredProduct.scss";
import ProductCard from "../productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

const FeaturedProduct = () => {
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
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            scrollbar={{ draggable: true }}
            slidesPerView={4}
            loop={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="col-3">
                <ProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-3">
                <ProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-3">
                <ProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-3">
                <ProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-3">
                <ProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-3">
                <ProductCard />
              </div>
            </SwiperSlide>
          </Swiper>
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
