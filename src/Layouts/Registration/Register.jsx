import React,{useEffect} from "react";
import "./Register.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
   useEffect(() => {
     window.scrollTo({ top: 0 });
   }, []);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required!")
        .min(2, "Must be at least 2 characters")
        .max(24, "Must be below 24 characters"),

      lastName: Yup.string()
        .required("Required!")
        .min(2, "Must be at least 2 characters")
        .max(24, "Must be below 24 characters"),
      email: Yup.string()
        .required("Required!")
        .matches(
          /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required("Required!")
        .min(6, "Must be at least 6 characters")
        .max(24, "Must be below 24 characters"),
      confirmedPassword: Yup.string()
        .required("Required!")
        .oneOf([Yup.ref("password"), null], "Password must match"),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    
    onSubmit: (values) => {
      console.log(values);
    },
    
  });
  console.log(formik.errors)

  return (
    <>
      <div className="register-wrapper">
        <div className="register-container">
          <div className="register-container-top">
            <p className="title">LOGIN VIA</p>
            <div className="facebook-box">
              <span>Sign in with Facebook</span>
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="google-box">
              <span>Sign in with Google</span>
              <i className="fa-brands fa-google"></i>
            </div>
          </div>
          <p className="or-line">OR</p>

          <div className="register-container-bot">
            <p className="title">CREATE ACCOUNT</p>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-item">
                <label htmlFor="firstName">FIRST NAME</label>
                <input
                  autoComplete="off"
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                {formik.errors.firstName && (
                  <span className="error-message">
                    {formik.errors.firstName}
                  </span>
                )}
              </div>
              <div className="form-item">
                <label htmlFor="lastName">LAST NAME</label>
                <input
                  autoComplete="off"
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                />
                {formik.errors.lastName && (
                  <span className="error-message">
                    {formik.errors.lastName}
                  </span>
                )}
              </div>
              <div className="form-item">
                <label htmlFor="email">EMAIL</label>
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your e-mail"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && (
                  <span className="error-message">{formik.errors.email}</span>
                )}
              </div>
              <div className="form-item">
                <label htmlFor="password">PASSWORD</label>
                <input
                  autoComplete="off"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.errors.password && (
                  <span className="error-message">
                    {formik.errors.password}
                  </span>
                )}
              </div>
              <div className="form-item">
                <label htmlFor="confirmedPassword">CONFIRM PASSWORD</label>
                <input
                  autoComplete="off"
                  id="confirmedPassword"
                  name="confirmedPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  value={formik.values.confirmedPassword}
                  onChange={formik.handleChange}
                />
                {formik.errors.confirmedPassword && (
                  <span className="error-message">
                    {formik.errors.confirmedPassword}
                  </span>
                )}
              </div>
              <button type="submit">CREATE</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
