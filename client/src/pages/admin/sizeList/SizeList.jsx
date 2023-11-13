import React, { useEffect } from "react";
import { Button, Table } from "antd";
import "./sizeList.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSizes } from "../../../features/size/sizeSlice";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Sno",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const SizeList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSizes());
  }, []);
  const sizeState = useSelector((state) => state.size.size);
  const data = sizeState.getSizes
    ? sizeState.getSizes.map((item, index) => ({
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
    <div className="size-list">
      <div className="header">
        <h1>Size List</h1>
      </div>
      <div className="content">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default SizeList;
