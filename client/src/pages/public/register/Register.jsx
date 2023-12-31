import React from "react";
import CustomInput from "../../../components/customInput/CustomInput";
import { Link } from "react-router-dom";
import "./register.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../../features/auth/authSlice";

let userSchema = Yup.object({
  firstname: Yup.string().required("Firstname is not valid!"),
  lastname: Yup.string().required("Lastname is not valid!"),
  email: Yup.string().nullable().email().required("Email is not valid!"),
  mobile: Yup.string().required("Mobile is not valid!"),
  password: Yup.string().required("Password is not valid!"),
});

const Register = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  return (
    <div className="register">
      <div className="row">
        <div className="col-12">
          <form onSubmit={formik.handleSubmit}>
            <h2>Register</h2>
            <div>
              <label htmlFor="firstname">Firstname *</label>
              <CustomInput
                type="text"
                id="firstname"
                name="firstname"
                classN="input"
                onCh={formik.handleChange("firstname")}
                onBl={formik.handleBlur("firstname")}
                val={formik.values.firstname}
              />
              <div className="error">
                {formik.touched.firstname && formik.errors.firstname}
              </div>
            </div>
            <div>
              <label htmlFor="lastname">Lastname *</label>
              <CustomInput
                type="text"
                id="lastname"
                name="lastname"
                classN="input"
                onCh={formik.handleChange("lastname")}
                onBl={formik.handleBlur("lastname")}
                val={formik.values.lastname}
              />
              <div className="error">
                {formik.touched.lastname && formik.errors.lastname}
              </div>
            </div>
            <div>
              <label htmlFor="email">Email *</label>
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
              <label htmlFor="mobile">Mobile *</label>
              <CustomInput
                type="text"
                id="mobile"
                name="mobile"
                classN="input"
                onCh={formik.handleChange("mobile")}
                onBl={formik.handleBlur("mobile")}
                val={formik.values.mobile}
              />
              <div className="error">
                {formik.touched.mobile && formik.errors.mobile}
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

              <Link to="/login">I have account. Login!</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
