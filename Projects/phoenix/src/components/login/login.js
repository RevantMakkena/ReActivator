import React from "react";
import "./login.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import TextError from "../shared/componentHelpers.js/TextError";
import {ToastContainer, toast} from "react-toastify";
import {Grid} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {loginUserAction} from "../../store/slices/LoginSlice";

const Login = () => {
  const dispatchLogin = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (vals) => {
    dispatchLogin(loginUserAction(vals.email, vals.password));
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email Required"),
    password: Yup.string().required("Password Required"),
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
                  <label htmlFor='email'>Email</label>
                </div>
                <div className='col'>
                  <Field name='email' type='text' id='email' />
                  <ErrorMessage component={TextError} name='email' />
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <label htmlFor='password'>Password</label>
                </div>
                <div className='col'>
                  <Field
                    name='password'
                    type='password'
                    id='password'
                  />
                  <ErrorMessage
                    component={TextError}
                    name='password'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col'></div>
                <div className='col'>
                  <button className='btn btn-primary' type='submit'>
                    Login
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

export default Login;
