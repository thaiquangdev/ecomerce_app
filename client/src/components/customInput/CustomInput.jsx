import React from "react";
import "./customInput.scss";

const CustomInput = ({
  type,
  name,
  placehoder,
  id,
  val,
  onCh,
  onBl,
  classN,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placehoder}
      id={id}
      value={val}
      onChange={onCh}
      onBlur={onBl}
      className={classN}
    />
  );
};

export default CustomInput;
