import React, { useEffect, useState } from "react";
import "./shop.scss";
import { Link } from "react-router-dom";
import CustomInput from "../../components/customInput/CustomInput";
import ProductCard from "../../components/productCard/ProductCard";
import {
  filterProduct,
  getProductPanigates,
} from "../../features/product/productSlice";
import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { getProdCates } from "../../features/productCategories/prodCateSlice";
import ProductCategories from "../../components/sideBar/productCategories/ProductCategories";
import Colors from "../../components/sideBar/colors/Colors";
import Sizes from "../../components/sideBar/sizes/Sizes";

const Shop = () => {
  const dispatch = useDispatch();
  const [categoriesdata, setCategoriesData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [categoryfilter, setCategoryfilter] = useState(null);
  const [colorfilter, setColorfilter] = useState(null);
  const [sizesfilter, setSizesfilter] = useState(null);
  const [priceMinfilter, setpriceMinfilter] = useState(null);
  const [priceMaxfilter, setpriceMaxfilter] = useState(null);

  // const getProductPanigations = async ({ page, limit }) => {
  //   const products = await dispatch(getProductPanigates({ page, limit }));
  //   if (products) {
  //     setTotalPage(products.payload.numberOfPages);
  //     const product = products.payload.productData;
  //     setProductData(product);
  //   }
  // };

  const filter = async ({
    page,
    limit,
    category,
    colors,
    sizes,
    priceMin,
    priceMax,
  }) => {
    const products = await dispatch(
      filterProduct({
        page,
        limit,
        category,
        colors,
        sizes,
        priceMin,
        priceMax,
      })
    );
    if (products) {
      setTotalPage(products.payload.numberOfPages);
      const product = products.payload.productData;
      setProductData(product);
    }
  };

  const getProductCategories = async () => {
    const products = await dispatch(getProdCates());
    if (products) {
      setCategoriesData(products.payload.getPcategories);
    }
  };

  // useEffect(() => {
  //   getProductPanigations({ page: page, limit: limit });
  // }, [page, limit]);

  useEffect(() => {
    getProductCategories();
    filter({
      page: page,
      limit: limit,
      category: categoryfilter,
      colors: colorfilter,
      sizes: sizesfilter,
      priceMin: priceMinfilter,
      priceMax: priceMaxfilter,
    });
  }, [
    page,
    limit,
    categoryfilter,
    colorfilter,
    sizesfilter,
    priceMinfilter,
    priceMaxfilter,
  ]);

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  return (
    <div className="shop w-main">
      <div className="row">
        <div className="col-3">
          <div className="product-categories">
            <div className="title">
              <h4>Product Categories</h4>
              <div className="content">
                <ProductCategories
                  data={categoriesdata}
                  setCategory={setCategoryfilter}
                />
              </div>
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
              <Colors setColorfilter={setColorfilter} />
            </div>
          </div>
          <div className="filter-size">
            <div className="title">
              <h4>Filter by Size</h4>
            </div>
            <div className="content">
              <Sizes setSizesfilter={setSizesfilter} />
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
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={totalPage}
              previousLabel="<"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
