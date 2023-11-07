import React from "react";
import { CustomInput } from "../../../components";
import "./createProduct.scss";

import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const CreateProduct = () => {
  return (
    <div className="create-product">
      <div className="header">
        <h1>Create Product</h1>
      </div>
      <div className="content">
        <form action="">
          <CustomInput
            type="text"
            placehoder="Enter product title"
            classN="text-title"
          />
          <CustomInput
            type="number"
            placehoder="Enter product price"
            classN="text-price"
          />
          <select name="" id="" className="select-category">
            <option value="">Select product category</option>
          </select>
          <select name="" id="" className="select-color">
            <option value="">Select color</option>
          </select>
          <select name="" id="" className="select-size">
            <option value="">Select size</option>
          </select>
          <CustomInput
            type="number"
            placehoder="Enter product quantity"
            classN="text-quantity"
          />
          <Dragger {...props} className="upload">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
          <button type="submit" className="btn">
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
