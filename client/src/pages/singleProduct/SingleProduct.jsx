import React, { useEffect } from "react";
import "./singleProduct.scss";
import { Link, useLocation } from "react-router-dom";
import CustomInput from "../../components/customInput/CustomInput";
import ProductCard from "../../components/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../features/product/productSlice";

const SingleProduct = () => {
  const location = useLocation();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productState = useSelector(
    (state) => state.product.products.productData
  );
  console.log(productState);
  useEffect(() => {
    dispatch(getProduct(getProductId));
  }, []);

  // hien thi so sao
  const star = productState.ratings.star;
  const starIcons = [];
  for (let i = 1; i <= star; i++) {
    starIcons.push(<ion-icon name="star" key={i}></ion-icon>);
  }

  return (
    <div className="singleProduct w-main">
      <div className="row">
        <div className="col-9">
          <div className="col-6 product-image">
            <div className="image">
              <img src={productState.images[0]} alt="" />
            </div>
          </div>
          <div className="col-6 product-content">
            <h1>{productState.title}</h1>
            <div className="review">
              <div className="star">{starIcons}</div>
              <p>{productState.ratings.length} reviews</p>
            </div>
            <span>
              {/* <del>$25.90</del> $19.90 */}
              {productState.price}
            </span>
            <p>{productState.description}</p>
            <span className="color" style={{}}></span>
            <div className="color-list">
              <ul>
                {productState?.colors.map((item) => {
                  return (
                    <li key={item?._id}>
                      <span
                        style={{ backgroundColor: item?.style }}
                        className="color-text"
                      >
                        {item?.title}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <span className="size">Size: M</span>
            <div className="size-list">
              <ul>
                <li>
                  <span className="size-text">XXS</span>
                </li>
                <li>
                  <span className="size-text">XS</span>
                </li>
                <li>
                  <span className="size-text">S</span>
                </li>
                <li>
                  <span className="size-text">M</span>
                </li>
                <li>
                  <span className="size-text">L</span>
                </li>
                <li>
                  <span className="size-text">XL</span>
                </li>
                <li>
                  <span className="size-text">XXL</span>
                </li>
              </ul>
            </div>
            <div className="form">
              <form action="">
                <CustomInput type="number" classN="input" />
                <button className="btn" type="submit">
                  Add to cart
                </button>
              </form>
              <div className="extra-button">
                <Link to="#">
                  <ion-icon name="earth-outline"></ion-icon>
                  <span>Size Guide</span>
                </Link>
                <Link to="/wishlist">
                  <ion-icon name="heart-outline"></ion-icon>
                  <span>Add to Wishlist</span>
                </Link>
                <Link to="#">
                  <ion-icon name="share-outline"></ion-icon>
                  <span>Share this product</span>
                </Link>
              </div>
            </div>
            <div className="product-meta">
              <div className="product-sku">
                <span>SKU:</span>
                <span className="sku">BE45VGRT</span>
              </div>
              <div className="product-categories">
                <span>Categories:</span>
                <span className="categories">PANTS, WOMEN</span>
              </div>
              <div className="product-tags">
                <span>Tags:</span>
                <span className="tags">black, while</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
        <div className="col-12">
          <div className="product-tabs">
            <Link to="#">Description</Link>
            <Link to="#">Additional information</Link>
            <Link to="#">Review (2)</Link>
          </div>
          <div className="product-des">
            <p>
              Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
              Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit
              ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
              fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies
              sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet
              est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan
              tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim
              a tortor.
            </p>
            <p>
              Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
              auctor, eleifend nunc a, lobortis neque. Praesent aliquam
              dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet,
              maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet
              eros sit amet, ultricies cursus ipsum. Sed consequat luctus
              ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu
              pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in
              vestibulum vulputate, lorem orci convallis quam, sit amet
              consequat nulla felis pharetra lacus. Duis semper erat mauris, sed
              egestas purus commodo vel.
            </p>
          </div>
        </div>
      </div>
      <div className="related-product">
        <div className="row">
          <div className="header">
            <h2>Related product</h2>
          </div>
          <div className="col-3">
            <ProductCard />
          </div>
          <div className="col-3">
            <ProductCard />
          </div>
          <div className="col-3">
            <ProductCard />
          </div>
          <div className="col-3">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
