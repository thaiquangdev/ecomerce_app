import React from "react";
import SiderBar from "../../components/sideBar/SiderBar";
import Banner from "../../components/banner/Banner";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import BestSeller from "../../components/bestSeller/BestSeller";
import FeaturedProduct from "../../components/featuredProduct/FeaturedProduct";
<<<<<<< HEAD
=======
import BuyersReviews from "../../components/buyersReviews/BuyersReviews";
import LaterNews from "../../components/laterNews/LaterNews";
>>>>>>> 8337bc5 (coding)

const Home = () => {
  return (
    <div className="home">
      <div className="w-main">
        <div className="row">
          <div className="col-3 border-right">
            <SiderBar />
          </div>
          <div className="col-9">
            <Banner />
          </div>
        </div>
      </div>
      <div className="w-main border-top">
        <Widget />
      </div>
      <div className="w-main">
        <BestSeller />
      </div>
      <div className="w-main">
        <FeaturedProduct />
      </div>
<<<<<<< HEAD
=======
      <div className="w-main">
        <BuyersReviews />
      </div>
      <div className="w-main">
        <LaterNews />
      </div>
>>>>>>> 8337bc5 (coding)
    </div>
  );
};

export default Home;
