import React from "react";
import "./login.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import TextError from "../shared/TextError";
import {LogUser} from "../api/HandleCredentials";
import {AuthDataContext} from "../shared/AuthDataProvider";

const Login = () => {
  const {state, dispatch} = AuthDataContext();
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (vals) => {
    const response = await LogUser(vals.email, vals.password);
    debugger;
    if (response) {
      dispatch({
        type: "LOGIN",
        payload: response,
      });
    } else {
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email Required"),
    password: Yup.string().required("Password Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      <Form>
        <div className='formDiv'>
          <label htmlFor='email'>Email</label>
          <Field name='email' type='text' id='email' />
          <ErrorMessage component={TextError} name='email' />
        </div>

        <div className='formDiv'>
          <label htmlFor='password'>Password</label>
          <Field name='password' type='password' id='password' />
          <ErrorMessage component={TextError} name='password' />
        </div>

        <div className='formDiv'>
          <button className='btn btn-primary' type='submit'>
            Login
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
