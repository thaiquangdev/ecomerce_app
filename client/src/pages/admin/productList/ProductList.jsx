import React, { useEffect } from "react";
import { Button, Table } from "antd";
import "./productList.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../features/product/productSlice";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price.length - b.price.length,
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Sizes",
    dataIndex: "sizes",
    sorter: (a, b) => a.sizes.length - b.sizes.length,
  },
  {
    title: "Colors",
    dataIndex: "colors",
    sorter: (a, b) => a.colors.length - b.colors.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const productState = useSelector((state) => state.product.products);
  const data = productState.productData
    ? productState.productData.map((item, index) => ({
        key: index + 1,
        title: item.title,
        price: `$ ${item.price}`,
        category: item.category.join(" "),
        sizes: item.sizes.join(" "),
        colors: item.colors.join(" "),
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
    <div className="product-list">
      <div className="header">
        <h1>Product List</h1>
      </div>
      <div className="content">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default ProductList;
