import React from "react";
import "./createProductCategory.scss";
import { CustomInput } from "../../../components";

const CreateProductCategory = () => {
  return (
    <div className="create-product-category">
      <div className="header">
        <h1>Create Product Category</h1>
      </div>
      <div className="content">
        <form action="">
          <CustomInput
            type="text"
            placehoder="Enter category title"
            classN="text-title"
          />
          <button type="submit" className="btn">
            Create Product Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductCategory;
