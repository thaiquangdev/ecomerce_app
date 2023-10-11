import React from "react";
import "./blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog w-main">
      <div className="row">
        <div className="col-3">
          <div className="popular-post">
            <div className="title">
              <h4>Popular Posts</h4>
            </div>
            <div className="post">
              <ul>
                <li>
                  <div className="post-image">
                    <img src="/blog-4.jpeg" alt="" />
                  </div>
                  <div className="post-content">
                    <Link to="#">April 25, 2022</Link>
                    <h3>
                      <Link to="#">The Best Products That Shape Fashion</Link>
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="post-image">
                    <img src="/blog-4.jpeg" alt="" />
                  </div>
                  <div className="post-content">
                    <Link to="#">April 25, 2022</Link>
                    <h3>
                      <Link to="#">The Best Products That Shape Fashion</Link>
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="post-image">
                    <img src="/blog-4.jpeg" alt="" />
                  </div>
                  <div className="post-content">
                    <Link to="#">April 25, 2022</Link>
                    <h3>
                      <Link to="#">The Best Products That Shape Fashion</Link>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="cateogories">
            <div className="title">
              <h4>Categories</h4>
            </div>
            <div className="category-content">
              <ul>
                <li>
                  <Link>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    <span>Clothing</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    <span>Clothing</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    <span>Clothing</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    <span>Clothing</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-9">
          <div className="blog-list">
            <div className="row">
              <div className="col-6">
                <BlogCard />
              </div>
              <div className="col-6">
                <BlogCard />
              </div>
              <div className="col-6">
                <BlogCard />
              </div>
              <div className="col-6">
                <BlogCard />
              </div>
            </div>
          </div>
          <div className="panigation">
            <ul>
              <li>
                <Link to="#">1</Link>
              </li>
              <li>
                <Link to="#">2</Link>
              </li>
              <li>
                <Link to="#">3</Link>
              </li>
              <li>
                <Link to="#">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
