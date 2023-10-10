import React from "react";
import "./blogCard.scss";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blogCard">
      <div className="blog-image">
        <img src="/blog-4.jpeg" alt="" />
      </div>
      <div className="blog-content">
        <div className="blog-header">
          <div className="blog-category">
            <Link to="#">Collection</Link>
          </div>
          <div className="blog-date">
            <Link to="#">25 Apr 2022</Link>
          </div>
        </div>
        <div className="blog-body">
          <h3 className="blog-title">
            <Link to="#">The Best Products That Shape Fashion</Link>
          </h3>
        </div>
        <div className="blog-des">
          <p>
            Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem
            sed convallis ultricies, ante eros
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
