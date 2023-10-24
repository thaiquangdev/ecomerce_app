import React from "react";
import "./ProductCategories.scss";
import { Link } from "react-router-dom";
import CustomInput from "../../customInput/CustomInput";
const ProductCategories = ({ data }) => {
  return (
    <div className="productCategories">
      <ul>
        {data.map((item, index) => {
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
  );
};

export default ProductCategories;
