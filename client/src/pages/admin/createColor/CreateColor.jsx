import React from "react";
import "./createColor.scss";
import { CustomInput } from "../../../components";

const CreateColor = () => {
  return (
    <div className="create-color">
      <div className="header">
        <h1>Create Color</h1>
      </div>
      <div className="content">
        <form action="">
          <CustomInput
            type="text"
            placehoder="Enter color title"
            classN="text-title"
          />
          <button type="submit" className="btn">
            Create Color
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateColor;
