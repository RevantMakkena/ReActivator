import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import TextError from "../shared/componentHelpers.js/TextError";
import "../login/login.css";
import {ToastContainer, toast} from "react-toastify";
import {Grid} from "@material-ui/core";

export const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = async (vals) => {
    if (true)
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
      <Grid container>
        <ToastContainer />
        <Grid item xs={9}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            <Form>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='name'>Name</label>
                </div>
                <div className='col'>
                  <Field type='text' name='name' id='name' />
                  <ErrorMessage component={TextError} name='name' />
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='email'>Email</label>
                </div>
                <div className='col'>
                  <Field type='text' name='email' id='email' />
                  <ErrorMessage component={TextError} name='email' />
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='password'>Password</label>
                </div>
                <div className='col'>
                  <Field
                    type='password'
                    name='password'
                    id='password'
                  />
                  <ErrorMessage
                    component={TextError}
                    name='password'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='confirmPassword'>
                    Confirm Password
                  </label>
                </div>
                <div className='col'>
                  <Field
                    type='password'
                    name='confirmPassword'
                    id='confirmPassword'
                  />
                  <ErrorMessage
                    component={TextError}
                    name='confirmPassword'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col'></div>
                <div className='col'>
                  <button className='btn btn-info' type='submit'>
                    Register
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </>
  );
};
