import React from "react";
import "./createSize.scss";
import { CustomInput } from "../../../components";

const CreateSize = () => {
  return (
    <div className="create-size">
      <div className="header">
        <h1>Create Size</h1>
      </div>
      <div className="content">
        <form action="">
          <CustomInput
            type="text"
            placehoder="Enter size title"
            classN="text-title"
          />
          <button type="submit" className="btn">
            Create Size
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSize;
