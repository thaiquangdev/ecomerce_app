import React, { useEffect, useState } from "react";
import "./shop.scss";
import { sideBar } from "../../utils/data";
import { Link } from "react-router-dom";
import CustomInput from "../../components/customInput/CustomInput";
import ProductCard from "../../components/productCard/ProductCard";
import { getProducts } from "../../features/product/productSlice";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState([]);

  const getAllProducts = async () => {
    const products = await dispatch(getProducts());
    const product = products.payload.productData;
    setProductData(product);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
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
          <div className="filter-color">
            <div className="title">
              <h4>Filter by Color</h4>
            </div>
            <div className="content">
              <ul>
                <li>
                  <div className="color-type">
                    <span className="color"></span>
                    <Link to="#">Apple Red</Link>
                  </div>
                  <span className="count">(9)</span>
                </li>
                <li>
                  <div className="color-type">
                    <span className="color"></span>
                    <Link to="#">Apple Red</Link>
                  </div>
                  <span className="count">(9)</span>
                </li>
                <li>
                  <div className="color-type">
                    <span className="color"></span>
                    <Link to="#">Apple Red</Link>
                  </div>
                  <span className="count">(9)</span>
                </li>
                <li>
                  <div className="color-type">
                    <span className="color"></span>
                    <Link to="#">Apple Red</Link>
                  </div>
                  <span className="count">(9)</span>
                </li>
                <li>
                  <div className="color-type">
                    <span className="color"></span>
                    <Link to="#">Apple Red</Link>
                  </div>
                  <span className="count">(9)</span>
                </li>
                <li>
                  <div className="color-type">
                    <span className="color"></span>
                    <Link to="#">Apple Red</Link>
                  </div>
                  <span className="count">(9)</span>
                </li>
                <li>
                  <div className="color-type">
                    <span className="color"></span>
                    <Link to="#">Apple Red</Link>
                  </div>
                  <span className="count">(9)</span>
                </li>
                <li>
                  <div className="color-type">
                    <span className="color"></span>
                    <Link to="#">Apple Red</Link>
                  </div>
                  <span className="count">(9)</span>
                </li>
                <li>
                  <div className="color-type">
                    <span className="color"></span>
                    <Link to="#">Apple Red</Link>
                  </div>
                  <span className="count">(9)</span>
                </li>
                <li>
                  <div className="color-type">
                    <span className="color"></span>
                    <Link to="#">Apple Red</Link>
                  </div>
                  <span className="count">(9)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="filter-size">
            <div className="title">
              <h4>Filter by Size</h4>
            </div>
            <div className="content">
              <div className="content">
                <ul>
                  <li>
                    <div className="size-type">
                      <CustomInput type="checkbox" classN="input" />
                      <span>XXS</span>
                    </div>
                    <span className="count">(10)</span>
                  </li>
                  <li>
                    <div className="size-type">
                      <CustomInput type="checkbox" classN="input" />
                      <span>XXS</span>
                    </div>
                    <span className="count">(10)</span>
                  </li>
                  <li>
                    <div className="size-type">
                      <CustomInput type="checkbox" classN="input" />
                      <span>XXS</span>
                    </div>
                    <span className="count">(10)</span>
                  </li>
                  <li>
                    <div className="size-type">
                      <CustomInput type="checkbox" classN="input" />
                      <span>XXS</span>
                    </div>
                    <span className="count">(10)</span>
                  </li>
                  <li>
                    <div className="size-type">
                      <CustomInput type="checkbox" classN="input" />
                      <span>XXS</span>
                    </div>
                    <span className="count">(10)</span>
                  </li>
                  <li>
                    <div className="size-type">
                      <CustomInput type="checkbox" classN="input" />
                      <span>XXS</span>
                    </div>
                    <span className="count">(10)</span>
                  </li>
                  <li>
                    <div className="size-type">
                      <CustomInput type="checkbox" classN="input" />
                      <span>XXS</span>
                    </div>
                    <span className="count">(10)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="product-status">
            <div className="title">
              <h4>Product Status</h4>
            </div>
            <div className="content">
              <ul>
                <li>
                  <CustomInput type="checkbox" classN="input" />
                  <span>In Stock</span>
                </li>
                <li>
                  <CustomInput type="checkbox" classN="input" />
                  <span>On Sale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="shop-banner">
            <div className="banner-image">
              <img src="/banner-26.jpg" alt="" />
            </div>
            <div className="banner-content">
              <h2>
                Plus-Size Styles for <br /> Every Season
              </h2>
              <p>
                Quis ipsum suspendisse ultrices gravida. Risus <br /> commodo
                viverra maecenas.
              </p>
            </div>
          </div>
          <div className="shop-button">
            <div className="layout">
              <ion-icon name="grid-outline"></ion-icon>
              <ion-icon name="list-outline"></ion-icon>
              <p>Showing 1–16 of 72 results</p>
            </div>
            <div className="sort">
              <div className="item">
                <span>Show:</span>
                <select name="" id="">
                  <option value="16">16 items</option>
                </select>
              </div>
              <div className="sort-item">
                <select name="" id="">
                  <option value="sort-by-latest">Sort by latest</option>
                </select>
              </div>
            </div>
          </div>
          <div className="product-list">
            <div className="row">
              {productData?.map((item) => {
                return (
                  <div className="col-3" key={item._id}>
                    <ProductCard productData={item} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="panigation">
            <ul>
              <li>
                <Link to="#">1</Link>
              </li>
              <li>
                <Link to="#">2</Link>
              </li>
              <li>
                <Link to="#">3</Link>
              </li>
              <li>
                <Link to="#">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
