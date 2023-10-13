import React from "react";
import "./buyersReviews.scss";
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

const BuyersReviews = () => {
  return (
    <div className="buyersReviews">
      <div className="row">
        <div className="col-12">
          <h3>Latest Buyers Reviews</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum <br /> suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis.
          </p>
        </div>

        <Slider {...settings}>
          <div className="col-4">
            <div className="star">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>
            <div className="comment">
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan facilisis.
            </div>
            <div className="author">Scarlett Edwards</div>
          </div>
          <div className="col-4">
            <div className="star">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>
            <div className="comment">
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan facilisis.
            </div>
            <div className="author">Scarlett Edwards</div>
          </div>
          <div className="col-4">
            <div className="star">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>
            <div className="comment">
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan facilisis.
            </div>
            <div className="author">Scarlett Edwards</div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BuyersReviews;
