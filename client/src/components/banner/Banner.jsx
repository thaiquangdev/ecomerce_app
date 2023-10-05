import React from "react";
import "./banner.scss";
import { Link } from "react-router-dom";
import { sliderBanner } from "../../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{ delay: 5000 }}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          {sliderBanner.map((item, index) => {
            return (
              <SwiperSlide>
                <div className="banner-wrapper" key={index}>
                  <img src={item.image} alt="slider" />
                  <div className="banner-text">
                    <h4>{item.title}</h4>
                    <h2>{item.des}</h2>
                    <Link to={item.path} className="btn">
                      {item.link}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
