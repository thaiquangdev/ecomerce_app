import React from "react";
import CustomInput from "../../components/customInput/CustomInput";
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="row">
        <div className="col-12">
          <form action="">
            <h2>Register</h2>
            <div>
              <label htmlFor="firstname">Firstname *</label>
              <CustomInput
                type="text"
                id="firstname"
                name="firstname"
                classN="input"
              />
            </div>
            <div>
              <label htmlFor="lastname">Lastname *</label>
              <CustomInput
                type="text"
                id="lastname"
                name="lastname"
                classN="input"
              />
            </div>
            <div>
              <label htmlFor="email">Email *</label>
              <CustomInput
                type="email"
                id="email"
                name="email"
                classN="input"
              />
            </div>
            <div>
              <label htmlFor="mobile">Mobile *</label>
              <CustomInput
                type="text"
                id="mobile"
                name="mobile"
                classN="input"
              />
            </div>
            <div>
              <label htmlFor="password">Password *</label>
              <CustomInput
                type="password"
                id="password"
                name="password"
                classN="input"
              />
            </div>
            <div className="policy">
              <span>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <Link to="/privacy-policy">privacy policy.</Link>
              </span>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <div className="link">
              <Link to="/register">I have account. Login!</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
