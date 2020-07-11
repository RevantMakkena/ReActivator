import React from "react";
import "./login.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import TextError from "../shared/TextError";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (vals) => {
    debugger;
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
        <div>
          <label htmlFor='email'>Email</label>
          <Field name='email' type='text' id='email' />
          <ErrorMessage component={TextError} name='email' />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <Field name='password' type='password' id='password' />
          <ErrorMessage component={TextError} name='password' />
        </div>

        <button className='btn btn-primary' type='submit'>
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default Login;
