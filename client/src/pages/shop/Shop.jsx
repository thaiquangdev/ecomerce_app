import React from "react";
import "./shop.scss";
import { sideBar } from "../../utils/data";
import { Link } from "react-router-dom";
import CustomInput from "../../components/customInput/CustomInput";

const Shop = () => {
  return (
    <div className="shop w-main">
      <div className="row">
        <div className="col-3">
          <div className="product-categories">
            <div className="title">
              <h4>Product Categories</h4>
            </div>
            <div className="content">
              <ul>
                {sideBar.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.path}>
                        <CustomInput type="checkbox" />
                        <label htmlFor="">{item.title}</label>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="filter-price">
            <div className="title">
              <h4>Filter by price</h4>
            </div>
            <div className="content">
              <div>
                <p>$</p>
                <CustomInput type="number" placehoder="From" classN="input" />
              </div>
              <div>
                <p>$</p>
                <CustomInput type="number" placehoder="To" classN="input" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-9"></div>
      </div>
    </div>
  );
};

export default Shop;
