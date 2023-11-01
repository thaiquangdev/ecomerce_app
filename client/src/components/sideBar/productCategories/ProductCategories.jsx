import React, { useEffect, useState } from "react";
import "./ProductCategories.scss";
import {
  Link,
  // createSearchParams,
  // useNavigate,
  // useParams,
} from "react-router-dom";
import CustomInput from "../../customInput/CustomInput";

const ProductCategories = ({ data, category, setCategory }) => {
  // const navigate = useNavigate();
  // const { category } = useParams();
  const handleSelect = (e) => {
    setCategory(e.toUpperCase());
  };
  // useEffect(() => {
  //   navigate({
  //     pathname: `/${category}`,
  //     search: createSearchParams({
  //       category: selected,
  //     }).toString(),
  //   });
  // }, [selected]);
  return (
    <div className="productCategories">
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} onClick={() => handleSelect(item.title)}>
                <CustomInput
                  type="checkbox"
                  name={item.title}
                  val={item.title}
                  id={item._id}
                />
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductCategories;
