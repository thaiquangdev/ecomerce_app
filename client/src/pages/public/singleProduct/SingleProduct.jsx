import React, { useEffect, useState } from "react";
import "./singleProduct.scss";
import { Link, useLocation } from "react-router-dom";
import CustomInput from "../../../components/customInput/CustomInput";
import ProductCard from "../../../components/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../features/product/productSlice";

const SingleProduct = () => {
  const [current, setCurrent] = useState("Description");
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

  const handleClick = (e) => {
    setCurrent(e);
  };

  return (
    <div className="singleProduct w-main">
      <div className="row">
        <div className="col-9">
          <div className="col-6 product-image">
            <div className="image">
              <img src={productState?.images[0]} alt="" />
            </div>
          </div>
          <div className="col-6 product-content">
            <h1>{productState?.title}</h1>
            <div className="review">
              {/* <div className="star">{starIcons}</div> */}
              <p>{productState?.ratings.length} reviews</p>
            </div>
            <span className="price">
              {/* <del>$25.90</del> $19.90 */}${productState?.price}
            </span>
            <p>{productState?.description}</p>
            <span className="color"></span>
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
            <span className="size"></span>
            <div className="size-list">
              <ul>
                {productState?.sizes.map((item, index) => {
                  return (
                    <li key={index}>
                      <span className="size-text">{item}</span>
                    </li>
                  );
                })}
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
                <span className="sku">{productState?.sku}</span>
              </div>
              <div className="product-categories">
                <span>Categories:</span>
                <span className="categories">
                  {productState?.category.map((item, index) => {
                    return (
                      <span key={index} className="category-item">
                        {item}{" "}
                      </span>
                    );
                  })}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
        <div className="col-12">
          <div className="product-tabs">
            <Link to="#" onClick={() => handleClick("Description")}>
              Description
            </Link>
            <Link to="#" onClick={() => handleClick("Information")}>
              Additional information
            </Link>
            <Link to="#" onClick={() => handleClick("Reviews")}>
              Review (2)
            </Link>
          </div>
          {current === "Description" && (
            <div className="product-des">
              <p>
                Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla. Morbi
                elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
                fermentum iaculis nibh, at sodales leo maximus a. Nullam
                ultricies sodales nunc, in pellentesque lorem mattis quis. Cras
                imperdiet est in nunc tristique lacinia. Nullam aliquam mauris
                eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare
                vel, dignissim a tortor.
              </p>
              <p>
                Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
                auctor, eleifend nunc a, lobortis neque. Praesent aliquam
                dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit
                amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit
                amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus
                ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut
                arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in
                vestibulum vulputate, lorem orci convallis quam, sit amet
                consequat nulla felis pharetra lacus. Duis semper erat mauris,
                sed egestas purus commodo vel.
              </p>
            </div>
          )}
          {current === "Information" && (
            <div className="product-info">
              <h2>Additional information</h2>
              <table>
                <tbody>
                  <tr>
                    <th>Color</th>
                    <td>
                      <p>
                        Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink,
                        Black, White
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>Size</th>
                    <td>
                      <p>XXS, XS, S, M, L, XL, XXL</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {current === "Reviews" && (
            <div className="product-review">
              <h2 className="comment-title">
                {productState?.ratings.length} reviews for {productState?.title}
              </h2>
              <div className="comment-content">
                {productState?.ratings.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="star">
                        {Array.from({ length: item?.star }, (_, i) => {
                          <ion-icon name="star" key={i}></ion-icon>;
                        })}
                      </div>
                      <p className="meta">
                        <strong className="author">{item?.postedBy}</strong>
                      </p>
                      <p className="description">{item?.comment}</p>
                    </div>
                  );
                })}
              </div>
              <div className="add-reviews">
                <h2 className="add-reviews-title">Add a review</h2>
                <p>
                  Your email address will not be published.Required fields are
                  marked*
                </p>
                <form action="" className="form-control">
                  <div className="rating">
                    <p>Your rating</p>
                    <ul>
                      <li>
                        <span>
                          <li>
                            <ion-icon name="star"></ion-icon>
                          </li>
                        </span>
                      </li>
                      <li>
                        <span>
                          <li>
                            <ion-icon name="star"></ion-icon>
                          </li>
                          <li>
                            <ion-icon name="star"></ion-icon>
                          </li>
                        </span>
                      </li>
                      <li>
                        <span>
                          <li>
                            <ion-icon name="star"></ion-icon>
                          </li>
                          <li>
                            <ion-icon name="star"></ion-icon>
                          </li>
                          <li>
                            <ion-icon name="star"></ion-icon>
                          </li>
                        </span>
                      </li>
                      <li>
                        <span>
                          <li>
                            <ion-icon name="star"></ion-icon>
                          </li>
                          <li>
                            <ion-icon name="star"></ion-icon>
                          </li>
                          <li>
                            <ion-icon name="star"></ion-icon>
                          </li>
                          <li>
                            <ion-icon name="star"></ion-icon>
                          </li>
                        </span>
                      </li>
                      <li>
                        <span>
                          <li>
                            <ion-icon name="star"></ion-icon>
                          </li>
                          <li>
                            <ion-icon name="star"></ion-icon>
                          </li>
                          <li>
                            <ion-icon name="star"></ion-icon>
                          </li>
                          <li>
                            <ion-icon name="star"></ion-icon>
                          </li>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="review">
                    <p>Your review</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                  <div className="name">
                    <p>Name</p>
                    <CustomInput type="text" classN="name-text" />
                  </div>
                  <div className="email">
                    <p>email</p>
                    <CustomInput type="email" classN="email-text" />
                  </div>
                  <div className="save">
                    <CustomInput type="checkbox" />
                    <span>
                      Save my name, email, and website is this browser for the
                      next time I comment.
                    </span>
                  </div>
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
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
