import React from "react";
import CustomInput from "../../components/customInput/CustomInput";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="row">
        <div className="col-12">
          <form action="">
            <h2>Login</h2>
            <div>
              <label htmlFor="email">Email address *</label>
              <CustomInput
                type="email"
                id="email"
                name="email"
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
            <button type="submit" className="btn">
              Login
            </button>
            <div className="link">
              <Link to="#">Forgot password?</Link>
              <Link to="/register">I don't have account. Register!</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
