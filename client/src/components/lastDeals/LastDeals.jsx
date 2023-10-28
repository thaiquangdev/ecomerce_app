import React from "react";
import "./lastDeals.scss";
import ProductCardDeal from "../productCardDeal/ProductCardDeal";

const LastDeals = ({ data }) => {
  return (
    <div className="lastDeals">
      <div className="row">
        <div className="col-12">
          <h3>Don't Miss The Last Deals</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas
          </p>
        </div>
        <div className="content">
          {data?.map((item, index) => {
            return (
              <div className="col-6" key={index}>
                <ProductCardDeal data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LastDeals;
