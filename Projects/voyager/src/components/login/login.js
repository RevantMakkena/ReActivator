import React from "react";
import "./login.css";
import {useFormik} from "formik";
import * as Yup from "yup";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (vals) => {
    console.log(vals.email);
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required!"),
    password: Yup.string().required("Required"),
  });

  const loginInfo = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <form onSubmit={loginInfo.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='text'
            id='email'
            {...loginInfo.getFieldProps("email")}
          />

          {loginInfo.errors.email && loginInfo.touched.email ? (
            <div className='error'>{loginInfo.errors.email}</div>
          ) : null}
        </div>

        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            id='password'
            {...loginInfo.getFieldProps("password")}
          />

          {loginInfo.errors.password && loginInfo.touched.password ? (
            <div className='error'>{loginInfo.errors.password}</div>
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
