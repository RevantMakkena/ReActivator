import React from "react";
import "./login.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import TextError from "../shared/TextError";
import {LogUser} from "../api/HandleCredentials";
import {AuthDataContext} from "../shared/AuthDataProvider";
import {BarLoader} from "react-spinners";
import {useState} from "react";
import {css} from "@emotion/core";
import {ToastContainer, toast} from "react-toastify";

const override = css`
  display: block;
  margin: 0 auto;
  color: red;
  width: 100%;
`;

const Login = () => {
  const {state, dispatch} = AuthDataContext();
  const [load, setLoad] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (vals) => {
    setLoad(true);
    const response = await LogUser(vals.email, vals.password);

    if (response) {
      dispatch({
        type: "LOGIN",
        payload: response,
      });
    } else {
      setLoad(false);
      toast.error("Network is down!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email Required"),
    password: Yup.string().required("Password Required"),
  });

  return (
    <>
      <ToastContainer />
      <div className='row'>
        <div>
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
                <Field
                  name='password'
                  type='password'
                  id='password'
                />
                <ErrorMessage component={TextError} name='password' />
              </div>

              <div className='formDiv'>
                {load ? (
                  <button
                    className='btn btn-primary'
                    disabled='disabled'>
                    Login
                    <BarLoader css={override} />
                  </button>
                ) : (
                  <button className='btn btn-primary' type='submit'>
                    Login
                  </button>
                )}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
