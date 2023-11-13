import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import "./customers.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../features/user/userSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.email.length - b.email.length,
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
    sorter: (a, b) => a.mobile.length - b.mobile.length,
  },
];

const Customers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const userState = useSelector((state) => state.user.user);
  const data = userState.users
    ? userState.users.map((user, index) => ({
        key: index + 1,
        name: `${user.firstname} ${user.lastname}`,
        email: user.email,
        mobile: user.mobile,
      }))
    : [];
  return (
    <div className="customers">
      <div className="header">
        <h1>Customers</h1>
      </div>
      <div className="content">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Customers;
