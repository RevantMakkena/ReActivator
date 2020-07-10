import React from "react";
import "./login.css";
// import {Formik, Form, Field, ErrorMessage, withFormik} from "formik";
import {useFormik, Formik} from "formik";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (vals) => {
    console.log(vals.email);
  };

  const validate = (vals) => {
    let errors = {};
    if (!vals.email) errors.email = "Email is required";

    if (!vals.password) errors.password = "Email is required";
    return errors;
  };

  const loginInfo = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log(loginInfo.errors);
  return (
    <div>
      <form onSubmit={loginInfo.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='text'
            id='email'
            onChange={loginInfo.handleChange}
            value={loginInfo.values.email}
          />

          {loginInfo.errors.email ? (
            <div className='error'>Email is Required</div>
          ) : null}
        </div>

        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            id='password'
            onChange={loginInfo.handleChange}
            value={loginInfo.values.password}
          />

          {loginInfo.errors.password ? (
            <div className='error'>Password is Required</div>
          ) : null}
        </div>

        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
