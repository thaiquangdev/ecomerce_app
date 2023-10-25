import React from "react";
import { colors } from "../../../utils/data";
import { Link } from "react-router-dom";
import "./colors.scss";

const Colors = () => {
  return (
    <div className="color">
      <ul>
        {colors.map((item, index) => {
          return (
            <li key={index}>
              <div className="color-type">
                <span
                  className="color"
                  style={{ backgroundColor: item.style }}
                ></span>
                <Link to="#">{item.title}</Link>
              </div>
              <span className="count">(9)</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Colors;
