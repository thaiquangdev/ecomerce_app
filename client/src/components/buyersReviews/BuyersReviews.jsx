import React from "react";
import "./buyersReviews.scss";
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
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BuyersReviews;
