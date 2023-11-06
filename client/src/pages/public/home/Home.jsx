import React, { useState, useEffect } from "react";
import SiderBar from "../../../components/sideBar/SiderBar";
import Banner from "../../../components/banner/Banner";
import "./home.scss";
import Widget from "../../../components/widget/Widget";
import BestSeller from "../../../components/bestSeller/BestSeller";
import FeaturedProduct from "../../../components/featuredProduct/FeaturedProduct";
import BuyersReviews from "../../../components/buyersReviews/BuyersReviews";
import LaterNews from "../../../components/laterNews/LaterNews";
import { getProducts } from "../../../features/product/productSlice";
import { useDispatch } from "react-redux";
import LastDeals from "../../../components/lastDeals/LastDeals";
const Home = () => {
  const dispatch = useDispatch();
  const [bestSeller, setBestSeller] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [lastDealProduct, setLastDealProduct] = useState([]);

  const getAllProducts = async () => {
    const products = await dispatch(getProducts());

    // best seller
    const productSeller = products.payload.productData.filter((product) =>
      product.tags.some((tag) => tag === "best-seller")
    );
    setBestSeller(productSeller);

    // feature product
    const productFeature = products.payload.productData.filter((product) =>
      product.tags.some((tag) => tag === "featured-product")
    );
    setFeaturedProduct(productFeature);

    // last deal product
    const productLastDeal = products.payload.productData.filter((product) =>
      product.tags.some((tag) => tag === "last-deals")
    );
    setLastDealProduct(productLastDeal);
  };
  console.log(lastDealProduct);
  useEffect(() => {
    getAllProducts();
  }, []);
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
        <BestSeller data={bestSeller} />
      </div>
      <div className="w-main">
        <FeaturedProduct data={featuredProduct} />
      </div>
      <div className="w-main">
        <BuyersReviews />
      </div>
      <div className="w-main">
        <LastDeals data={lastDealProduct} />
      </div>
      <div className="w-main">
        <LaterNews />
      </div>
    </div>
  );
};

export default Home;
