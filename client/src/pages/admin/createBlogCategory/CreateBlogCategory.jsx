import React from "react";
import "./createBlogCategory.scss";
import { CustomInput } from "../../../components";

const CreateBlogCategory = () => {
  return (
    <div className="create-blog-category">
      <div className="header">
        <h1>Create Blog Category</h1>
      </div>
      <div className="content">
        <form action="">
          <CustomInput
            type="text"
            placehoder="Enter color title"
            classN="text-title"
          />
          <button type="submit" className="btn">
            Create Blog Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogCategory;
