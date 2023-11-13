import React, { useEffect } from "react";
import { Button, Table } from "antd";
import "./colorList.scss";
import { useDispatch, useSelector } from "react-redux";
import { getColors } from "../../../features/color/colorSlice";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Sno",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const ColorList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getColors());
  }, []);
  const colorState = useSelector((state) => state.color.color);
  const data = colorState.getColors
    ? colorState.getColors.map((item, index) => ({
        key: index + 1,
        title: item.title,
        action: (
          <>
            <Link to="#" className="action">
              <ion-icon name="create"></ion-icon>
            </Link>
            <Link to="#" className="action">
              <ion-icon name="trash"></ion-icon>
            </Link>
          </>
        ),
      }))
    : [];
  return (
    <div className="color-list">
      <div className="header">
        <h1>Color List</h1>
      </div>
      <div className="content">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default ColorList;
