import React from "react";
import "./wishList.scss";
import CustomInput from "../../../components/customInput/CustomInput";
import { sosial } from "../../../utils/data";
import { Link } from "react-router-dom";

const WishList = () => {
  return (
    <div className="wishlist w-main">
      <div className="title">
        <h2>Default wishlist</h2>
      </div>
      <table>
        <thead>
          <tr className="header">
            <th className="product-cb">
              <CustomInput type="checkbox" />
            </th>
            <th className="product-remove"></th>
            <th className="product-image"></th>
            <th className="product-name">
              <span>Product Name</span>
            </th>
            <th className="product-price">Unit Price</th>
            <th className="product-date">Date Added</th>
            <th className="product-stock">Stock Status</th>
            <th className="product-action"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="product">
            <td className="product-cb">
              <CustomInput type="checkbox" />
            </td>
            <td className="product-remove">
              <span>
                <ion-icon name="close-circle-outline"></ion-icon>
              </span>
            </td>
            <td className="product-image">
              <img src="/pants1.jpeg" alt="" />
            </td>
            <td className="product-name">World Wide Cup Print T-Shirt</td>
            <td className="product-price">$23.99</td>
            <td className="product-date">
              <time>October 26, 2023</time>
            </td>
            <td className="product-stock">
              <span>
                <ion-icon name="checkmark-outline"></ion-icon>
              </span>
              <span>In Stock</span>
            </td>
            <td className="product-action">
              <button className="btn" type="submit">
                Add to Cart
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={100}>
              <div className="footer">
                <div className="action">
                  <select name="" id="">
                    <option value="actions">Actions</option>
                  </select>
                  <button className="btn" type="submit">
                    Apply Action
                  </button>
                </div>
                <div className="add-to-cart">
                  <button on className="btn" type="submit">
                    Add Selected to Cart
                  </button>
                  <button className="btn" type="submit">
                    Add All to Cart
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="share-sosial">
        <span>Share on</span>
        <ul>
          {sosial.map((item, index) => {
            return (
              <li>
                <Link>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WishList;
