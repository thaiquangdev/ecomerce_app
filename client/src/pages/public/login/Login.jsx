import React, { useEffect } from "react";
import CustomInput from "../../../components/customInput/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../features/user/userSlice";

let userSchema = Yup.object({
  email: Yup.string().nullable().email().required("Email is not valid!"),
  password: Yup.string().required("Password is not valid!"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const { userData } = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (userData) {
      navigate("/");
    }
  }, [userData]);

  return (
    <div className="login">
      <div className="row">
        <div className="col-12">
          <form onSubmit={formik.handleSubmit}>
            <h2>Login</h2>
            <div>
              <label htmlFor="email">Email address *</label>
              <CustomInput
                type="email"
                id="email"
                name="email"
                classN="input"
                onCh={formik.handleChange("email")}
                onBl={formik.handleBlur("email")}
                val={formik.values.email}
              />
              <div className="error">
                {formik.touched.email && formik.errors.email}
              </div>
            </div>
            <div>
              <label htmlFor="password">Password *</label>
              <CustomInput
                type="password"
                id="password"
                name="password"
                classN="input"
                onCh={formik.handleChange("password")}
                onBl={formik.handleBlur("password")}
                val={formik.values.password}
              />
              <div className="error">
                {formik.touched.password && formik.errors.password}
              </div>
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
