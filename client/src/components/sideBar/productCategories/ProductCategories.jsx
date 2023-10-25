import React, { useEffect, useState } from "react";
import "./ProductCategories.scss";
import {
  Link,
  // createSearchParams,
  // useNavigate,
  // useParams,
} from "react-router-dom";
import CustomInput from "../../customInput/CustomInput";

const ProductCategories = ({ data }) => {
  const [selected, setSelected] = useState([]);
  // const navigate = useNavigate();
  // const { category } = useParams();
  const handleSelect = (e) => {
    const alreadyEl = selected.find((el) => el === e.target.value);
    if (alreadyEl)
      setSelected((prev) => prev.filter((el) => el !== e.target.value));
    else setSelected((prev) => [...prev, e.target.value]);
  };
  // useEffect(() => {
  //   navigate({
  //     pathname: `/${category}`,
  //     search: createSearchParams({
  //       category: selected,
  //     }).toString(),
  //   });
  // }, [selected]);
  return (
    <div className="productCategories">
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>
                <CustomInput
                  type="checkbox"
                  name={item.title}
                  val={item.title}
                  id={item._id}
                  oncl={handleSelect}
                />
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductCategories;
