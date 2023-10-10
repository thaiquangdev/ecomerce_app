import React from "react";
import BlogCard from "../blogCard/BlogCard";
import "./laterNews.scss";

const LaterNews = () => {
  return (
    <div className="laterNews">
      <div className="row">
        <div className="col-12">
          <h3>Our Latest News</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra vel
            facilisis.
          </p>
        </div>
        <div className="col-4">
          <BlogCard />
        </div>
        <div className="col-4">
          <BlogCard />
        </div>
        <div className="col-4">
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default LaterNews;
