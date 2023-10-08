import React from "react";
import "./bestSeller.scss";
import { Link } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const BestSeller = () => {
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
