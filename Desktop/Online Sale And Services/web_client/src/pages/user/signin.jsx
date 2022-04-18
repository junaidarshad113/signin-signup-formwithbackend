import axios from "axios";
import React from "react";
import { Form, Formik, Field } from "formik";
import * as yup from "yup";
import Error from "./errors";
import { Link } from "react-router-dom";
const validationschema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/gim,
      "please enter correct email"
    ),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain One Uppercase and special character"
    ),
});
const Signin = () => {
  return (
    <Formik
      validationSchema={validationschema}
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm({ values: "" });
        axios
          .post("http://localhost:8000/api/v2/signin", {
            email: values.email,
            password: values.password,
          })
          .then((res) => {
            alert("login Successfully");
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      <div className="container">
        <div className="forms">
          <div className="form login">
            <span className="title">Login</span>

            <Form>
              <div className="input-field">
                <Field
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  required
                />
                <i className="uil uil-envelope icon"></i>
              </div>
              <Error name="email" />
              <div className="input-field">
                <Field
                  name="password"
                  type="password"
                  className="password"
                  placeholder="Enter your password"
                  required
                />
                <i className="uil uil-lock icon"></i>
              </div>
              <Error name="password" />

              <div className="checkbox-text">
                <div className="checkbox-content">
                  <input type="checkbox" id="logCheck" />
                  <label for="logCheck" className="text">
                    Remember me
                  </label>
                </div>

                <a href="#" className="text">
                  Forgot password?
                </a>
              </div>

              <div className="input-field button">
                <input type="submit" value="Login Now" />
              </div>

              <div className="login-signup">
                <span className="text">
                  Not a member?
                  <Link to={`/signup`}>
                    {" "}
                    <a href="#" className="text signup-link">
                      {" "}
                      Signup now{" "}
                    </a>
                  </Link>
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default Signin;
