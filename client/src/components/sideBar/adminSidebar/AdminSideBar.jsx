import React, { useState } from "react";
import "./adminSideBar.scss";
import { adminSidebar } from "../../../utils/data";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const toggleNestedSidebar = (index) => {
    setOpenSubmenuIndex(index === openSubmenuIndex ? null : index);
  };
  return (
    <div className="admin-sidebar">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="content">
        {adminSidebar.map((item, index) => {
          return (
            <ul key={index}>
              <li>
                {item.type === "single" ? (
                  <Link to={item.path}>
                    <span>{item.icon}</span>
                    <p>{item.title}</p>
                  </Link>
                ) : (
                  <>
                    <Link to="#" onClick={() => toggleNestedSidebar(index)}>
                      <span>{item.icon}</span>
                      <p>{item.title}</p>
                    </Link>
                    <div
                      className={`sub-menu ${
                        openSubmenuIndex === index ? "open" : ""
                      }`}
                    >
                      {item.submenu.map((item, index) => {
                        return (
                          <ul key={index}>
                            <li>
                              <Link to={item.path}>
                                <span>{item.icon}</span>
                                <p>{item.title}</p>
                              </Link>
                            </li>
                          </ul>
                        );
                      })}
                    </div>
                  </>
                )}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSideBar;
