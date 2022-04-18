import React from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import * as yup from "yup";
import Error from "./errors";
const validationSchema = yup.object({
  username: yup.string().required("Name is Required!"),
  cnic: yup
    .string()
    .required("Cnic is Required!")
    .min(13, "Invalid cnic")
    .max(20, "valid cnic")
    .matches(/^[0-9]{5}(-[0-9]{7})(-[0-9]{1})$/, "invalid pattern"),
  email: yup
    .string()
    .required("email is required")
    .matches(
      /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/gim,
      "please enter correct email"
    ),
  phone_no: yup
    .string()
    .required("phone no is required")
    .matches(
      /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm,
      "please enter correct phone no"
    ),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain One Uppercase and special character"
    ),
  confirm_password: yup
    .string()
    .required("confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Regestration = () => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        username: "",
        cnic: "",
        email: "",
        phone_no: "",
        password: "",
        confirm_password: "",
      }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm({ values: "" });

        axios 
        .post("http://localhost:8000/api/v1/new", {
          username: values.username,
          cnic: values.cnic,
          email: values.email,
          phone_no: values.phone_no,
          password: values.password,
          confirm_password: values.confirm_password
        })
        .then((res)=>{
          alert(res.data.message)
        })
        .catch((err)=>{
          console.log(err)
        })
      }}

    >
      <div className="container" >
        <div className="forms1">
          <div className="form signup">
            <span className="title">Registration</span>

            <Form>
              <div className="input-field">
                <Field
                  name="username"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
                <i className="uil uil-user icon"></i>
              </div>
              <Error name="username" />
              <div className="input-field">
                <Field name="cnic" type="text" placeholder="Enter your cnic" required />
                <i className="uil uil-postcard"></i>
              </div>
              <Error name="cnic" />
              <div className="input-field">
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <i className="uil uil-envelope icon"></i>
              </div>
              <Error name="email" />
              <div className="input-field">
                <Field
                  name="phone_no"
                  type="number"
                  placeholder="Enter your phone_no"
                  required
                />
                <i className="uil uil-phone"></i>
              </div>
              <Error name="phone_no" />
              <div className="input-field">
                <Field
                  type="password"
                  className="password"
                  name="password"
                  placeholder="Create a password"
                  required
                />
                <i className="uil uil-lock icon"></i>
               
              </div>
              <Error name="password" />
              <div className="input-field">
                <Field
                  type="password"
                  className="password"
                  name="confirm_password"
                  placeholder="Confirm a password"
                  required
                />
                <i className="uil uil-lock icon"></i>
                
              </div>
              <Error name="confirm_password" />
              <div className="checkbox-text">
                
                <a href="#" className="text">
                  Forgot password?
                </a>
              </div>
              <div className="input-field button">
                <input type="submit" value="Login Now" />
              </div>
              <div className="login-signup">
                <span className="text">
                  Already exist member?
                  <Link to={"/"}>
                    <a href="#" className="text login-link">
                      Signin now
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

export default Regestration;
