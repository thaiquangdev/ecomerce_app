import React from "react";
import "./sizes.scss";
import CustomInput from "../../customInput/CustomInput";
import { sizes } from "../../../utils/data";

const Sizes = ({ setSizesfilter }) => {
  const handleClick = (e) => {
    setSizesfilter(e);
  };
  return (
    <div className="size">
      <ul>
        {sizes.map((item, index) => {
          return (
            <li key={index}>
              <div
                className="size-type"
                onClick={() => handleClick(item.title)}
              >
                <CustomInput type="checkbox" classN="input" />
                <span>{item.title}</span>
              </div>
              <span className="count">(10)</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sizes;
