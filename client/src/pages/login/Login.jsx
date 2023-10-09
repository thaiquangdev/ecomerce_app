import React from "react";
import CustomInput from "../../components/customInput/CustomInput";
import { Link } from "react-router-dom";
import "./login.scss";
<<<<<<< HEAD

const Login = () => {
=======
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice";

let userSchema = Yup.object({
  email: Yup.string().nullable().email().required("Email is not valid!"),
  password: Yup.string().required("Password is not valid!"),
});

const Login = () => {
  const dispatch = useDispatch();

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

>>>>>>> 8337bc5 (coding)
  return (
    <div className="login">
      <div className="row">
        <div className="col-12">
<<<<<<< HEAD
          <form action="">
=======
          <form onSubmit={formik.handleSubmit}>
>>>>>>> 8337bc5 (coding)
            <h2>Login</h2>
            <div>
              <label htmlFor="email">Email address *</label>
              <CustomInput
                type="email"
                id="email"
                name="email"
                classN="input"
<<<<<<< HEAD
              />
=======
                onCh={formik.handleChange("email")}
                onBl={formik.handleBlur("email")}
                val={formik.values.email}
              />
              <div className="error">
                {formik.touched.email && formik.errors.email}
              </div>
>>>>>>> 8337bc5 (coding)
            </div>
            <div>
              <label htmlFor="password">Password *</label>
              <CustomInput
                type="password"
                id="password"
                name="password"
                classN="input"
<<<<<<< HEAD
              />
=======
                onCh={formik.handleChange("password")}
                onBl={formik.handleBlur("password")}
                val={formik.values.password}
              />
              <div className="error">
                {formik.touched.password && formik.errors.password}
              </div>
>>>>>>> 8337bc5 (coding)
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
