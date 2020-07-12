import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import TextError from "../shared/TextError";
import "../login/login.css";

export const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (vals) => {
    console.log(vals);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      <Form>
        <div className='formDiv'>
          <label htmlFor='name'>Name</label>
          <Field type='text' name='name' id='name' />
          <ErrorMessage component={TextError} name='name' />
        </div>
        <div className='formDiv'>
          <label htmlFor='email'>Email</label>
          <Field type='text' name='email' id='email' />
          <ErrorMessage component={TextError} name='email' />
        </div>
        <div className='formDiv'>
          <label htmlFor='password'>Password</label>
          <Field type='text' name='password' id='password' />
          <ErrorMessage component={TextError} name='password' />
        </div>
        <div className='formDiv'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <Field
            type='text'
            name='confirmPassword'
            id='confirmPassword'
          />
          <ErrorMessage
            component={TextError}
            name='confirmPassword'
          />
        </div>
        <div className='formDiv'>
          <button className='btn btn-primary' type='submit'>
            Register
          </button>
        </div>
      </Form>
    </Formik>
  );
};
