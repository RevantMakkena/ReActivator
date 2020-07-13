import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import TextError from "../shared/TextError";
import "../login/login.css";
import {RegisterUser} from "../api/HandleCredentials";
import {ToastContainer, toast} from "react-toastify";

export const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = async (vals) => {
    console.log(vals);
    const response = await RegisterUser(
      vals.name,
      vals.email,
      vals.password
    );

    if (response)
      toast.success("Registration Successful!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    else
      toast.error("Error while registering!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().required("Required"),
  });

  return (
    <>
      <ToastContainer />
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
            <button className='btn btn-info' type='submit'>
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
