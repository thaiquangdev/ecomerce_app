import React from "react";
import "./banner.scss";
import { Link } from "react-router-dom";
import { sliderBanner } from "../../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Banner = () => {
  return (
    <>
      <div className="banner">
        <Slider {...settings}>
          {sliderBanner.map((item, index) => {
            return (
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
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Banner;
