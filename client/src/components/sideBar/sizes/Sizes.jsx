import React from "react";
import "./sizes.scss";
import CustomInput from "../../customInput/CustomInput";
import { sizes } from "../../../utils/data";

const Sizes = () => {
  return (
    <div className="size">
      <ul>
        {sizes.map((item, index) => {
          return (
            <li key={index}>
              <div className="size-type">
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
