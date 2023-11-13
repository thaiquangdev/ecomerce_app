import React from "react";
import { Button, Table } from "antd";
import "./blogList.scss";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const BlogList = () => {
  return (
    <div className="blog-list">
      <div className="header">
        <h1>Product List</h1>
      </div>
      <div className="content">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default BlogList;
