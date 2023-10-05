import React from "react";
import "./sideBar.scss";
import { Link } from "react-router-dom";
import { sideBar } from "../../utils/data";

const SiderBar = () => {
  return (
    <div className="side-bar">
      <ul>
        {sideBar?.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SiderBar;
