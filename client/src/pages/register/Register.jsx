import React from "react";
import CustomInput from "../../components/customInput/CustomInput";
import { Link } from "react-router-dom";
import "./register.scss";
<<<<<<< HEAD

const Register = () => {
=======
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../features/user/userSlice";

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

>>>>>>> 8337bc5 (coding)
  return (
    <div className="register">
      <div className="row">
        <div className="col-12">
<<<<<<< HEAD
          <form action="">
=======
          <form onSubmit={formik.handleSubmit}>
>>>>>>> 8337bc5 (coding)
            <h2>Register</h2>
            <div>
              <label htmlFor="firstname">Firstname *</label>
              <CustomInput
                type="text"
                id="firstname"
                name="firstname"
                classN="input"
<<<<<<< HEAD
              />
=======
                onCh={formik.handleChange("firstname")}
                onBl={formik.handleBlur("firstname")}
                val={formik.values.firstname}
              />
              <div className="error">
                {formik.touched.firstname && formik.errors.firstname}
              </div>
>>>>>>> 8337bc5 (coding)
            </div>
            <div>
              <label htmlFor="lastname">Lastname *</label>
              <CustomInput
                type="text"
                id="lastname"
                name="lastname"
                classN="input"
<<<<<<< HEAD
              />
=======
                onCh={formik.handleChange("lastname")}
                onBl={formik.handleBlur("lastname")}
                val={formik.values.lastname}
              />
              <div className="error">
                {formik.touched.lastname && formik.errors.lastname}
              </div>
>>>>>>> 8337bc5 (coding)
            </div>
            <div>
              <label htmlFor="email">Email *</label>
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
              <label htmlFor="mobile">Mobile *</label>
              <CustomInput
                type="text"
                id="mobile"
                name="mobile"
                classN="input"
<<<<<<< HEAD
              />
=======
                onCh={formik.handleChange("mobile")}
                onBl={formik.handleBlur("mobile")}
                val={formik.values.mobile}
              />
              <div className="error">
                {formik.touched.mobile && formik.errors.mobile}
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
<<<<<<< HEAD
              <Link to="/register">I have account. Login!</Link>
=======
              <Link to="/login">I have account. Login!</Link>
>>>>>>> 8337bc5 (coding)
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
