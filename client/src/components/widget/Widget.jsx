import React from "react";
import "./widget.scss";
import { Link } from "react-router-dom";

const Widget = () => {
  return (
    <div className="widget">
      <div className="row">
        <div className="col-6">
          <div className="banner-inner">
            <img src="/banner-01.jpg" alt="banner" />
            <div className="banner-content">
              <h4>NEW SEASON</h4>
              <h2>
                Big patterns are <br /> back in fashion
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod.
              </p>
              <Link to="#">
                Shop Now <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="banner-inner">
            <img src="/banner-02.jpg" alt="banner" />
            <div className="banner-content">
              <h4>NEW SEASON</h4>
              <h2>
                Big patterns are <br /> back in fashion
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod.
              </p>
              <Link to="#">
                Shop Now <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link>
            </div>
          </div>
          <div className="banner-inner">
            <img src="/banner-03.jpg" alt="banner" />
            <div className="banner-content">
              <h4>NEW SEASON</h4>
              <h2>
                Big patterns are <br /> back in fashion
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod.
              </p>
              <Link to="#">
                Shop Now <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
