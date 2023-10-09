import React from "react";
import "./blogCard.scss";

const BlogCard = () => {
  return (
    <div className="blogCard">
      <div blog-image>
        <img src="/blog-4.jpeg" alt="" />
      </div>
      <div className="blog-content">
        <div className="blog-header">
          <div className="blog-category">
            <a href="#">Collection</a>
          </div>
          <div className="blog-date">
            <a href="#">25 Apr 2022</a>
          </div>
        </div>
        <div className="blog-body">
          <h3 className="blog-title">
            <a href="#">The Best Products That Shape Fashion</a>
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
