import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-subscribe">
            <h3>
              Get our emails for info on <br /> new items, sales and more.
            </h3>
            <div className="sub-description">
              <p>
                We'll email you a voucher worth £10 off your first order over
                £50.
              </p>
            </div>
            <div className="sub-form">
              <form action="">
                <div>
                  <input type="text" placeholder="Enter your email address" />
                  <button type="submit" className="btn btn-sub">
                    Subscribe
                  </button>
                  <p>
                    By subscribing you agree to our Terms & Conditions and
                    Privacy & Cookies Policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-contact">
            <h3>
              Need help?
              <br />
              (+800) 1234 5678 90
            </h3>
            <div className="contact-des">
              <p>We are available 8:00am – 7:00pm</p>
            </div>
            <div className="contact-app">
              <Link to="#">
                <img src="app-store.png" alt="app" />
              </Link>
              <Link to="#">
                <img src="google-play.png" alt="app" />
              </Link>
            </div>
            <div>
              <p>
                Shopping App: Try our View in Your Room feature, manage
                registries and save payment info.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-brand">
        <div>
          <img src="/logo.png" alt="logo" />
          <div className="brand-text">
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus <br /> commodo
              viverra maecenas accumsan lacus vel <br /> facilisis in termapol.
            </p>
          </div>
          <div className="brand-info">
            <p>(+800) 1234 5678 90 – info@example.com</p>
          </div>
        </div>
        <div className="footer-list">
          <div>
            <h4>Infomation</h4>
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/return-policy">Return Policy</Link>
              </li>
              <li>
                <Link to="/shipping-policy">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/dropshipping">Dropshipping</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Account</h4>
            <ul>
              <li>
                <Link to="/my-account">Dashboard</Link>
              </li>
              <li>
                <Link to="/my-account/order">My Orders</Link>
              </li>
              <li>
                <Link to="/whishlist">My Wishlist</Link>
              </li>
              <li>
                <Link to="/my-account/edit-account">Account details</Link>
              </li>
              <li>
                <Link to="/order-tracking">Track My Orders</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li>
                <Link to="/contact">Affiliate</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Bestsellers</Link>
              </li>
              <li>
                <Link to="/return-policy">Discount</Link>
              </li>
              <li>
                <Link to="/shipping-policy">Latest Products</Link>
              </li>
              <li>
                <Link to="/dropshipping">Sale Products</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Categories</h4>
            <ul>
              <li>
                <Link to="/contact">Women</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Men</Link>
              </li>
              <li>
                <Link to="/return-policy">Bags</Link>
              </li>
              <li>
                <Link to="/shipping-policy">Outerwear</Link>
              </li>
              <li>
                <Link to="/dropshipping">Shoes</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="text">
          <p>
            Copyright 2023 © Clotya WordPress Theme. All right reserved. Powered
            by thaiQuang
          </p>
        </div>
        <div className="card">
          <img src="/cards.png" alt="card" />
        </div>
        <div>
          <ul>
            <li>
              <Link to="privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="terms-conditions">Terms Conditions</Link>
            </li>
            <li>
              <Link to="return-policy">Return Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
