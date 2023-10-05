import React from "react";
import SiderBar from "../../components/sideBar/SiderBar";
import Banner from "../../components/banner/Banner";
import "./home.scss";

const Home = () => {
  return (
    <div className="border-top ">
      <div className="w-main">
        <div className="row">
          <div className="col-3">
            <SiderBar />
          </div>
          <div className="col-9">
            <Banner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
