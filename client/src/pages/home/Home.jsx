import React from "react";
import SiderBar from "../../components/sideBar/SiderBar";
import Banner from "../../components/banner/Banner";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import BestSeller from "../../components/bestSeller/BestSeller";
import FeaturedProduct from "../../components/featuredProduct/FeaturedProduct";

const Home = () => {
  return (
    <div className="border-top ">
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
    </div>
  );
};

export default Home;
