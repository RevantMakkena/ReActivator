import React from "react";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import {GetEmployeeById} from "../api/EmployeeApi";
import {useEffect, useState} from "react";
import {AuthDataContext} from "../shared/AuthDataProvider";
import {Link} from "react-router-dom";

export const AddEmployee = ({initialValues}) => {
  const {state, dispatch} = AuthDataContext();

  const onSubmit = {};
  const validationSchema = Yup.object({
    fName: Yup.string().required("First Name Required"),
    lName: Yup.string().required("Last Name Required"),
    email: Yup.string().required("Email Required"),
    phNo: Yup.string().required("Phone Number Required"),
    city: Yup.string().required("City Required"),
    state: Yup.string().required("State Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      <Form>
        <div className='row'>
          <div className='col'>
            <div className='formDiv'>
              <label htmlFor='fName'>First Name</label>
              <Field name='fName' type='text' id='fName' />
            </div>
            <div className='formDiv'>
              <label htmlFor='lName'>Last Name</label>
              <Field name='lName' type='text' id='lName' />
            </div>
            <div className='formDiv'>
              <label htmlFor='email'>Email</label>
              <Field name='email' type='text' id='email' />
            </div>
            <div className='formDiv'>
              <label htmlFor='phNo'>Phone Number</label>
              <Field name='phNo' type='text' id='phNo' />
            </div>
            <div className='formDiv'>
              <label htmlFor='gender'>Gender</label>
              <Field name='gender' type='text' id='gender' />
            </div>
          </div>
          <div className='col'>
            <div className='formDiv'>
              <label htmlFor='race'>Race</label>
              <Field name='race' type='text' id='race' />
            </div>
            <div className='formDiv'>
              <label htmlFor='university'>University</label>
              <Field name='university' type='text' id='university' />
            </div>
            <div className='formDiv'>
              <label htmlFor='city'>City</label>
              <Field name='city' type='text' id='city' />
            </div>
            <div className='formDiv'>
              <label htmlFor='state'>State</label>
              <Field name='state' type='text' id='state' />
            </div>
          </div>
        </div>
        <div className='row'>
          <button className='btn btn-primary'>Update</button>
          <Link to='/employees'>
            <button className='btn btn-danger'>Cancel</button>
          </Link>
        </div>
      </Form>
    </Formik>
  );
};
