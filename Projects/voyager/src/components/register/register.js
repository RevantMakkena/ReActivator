import React from "react";
import {useFormik} from "formik";

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

  const validate = (vals) => {
    let errors = {};
    if (!vals.name) errors.name = "Name is Required";
    if (!vals.email) errors.email = "Email is Required";
    if (!vals.password) errors.password = "Password is Required";
    if (!vals.confirmPassword)
      errors.confirmPassword = "Confirm Password is Required";

    return errors;
  };

  const registerFields = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div>
      <form onSubmit={registerFields.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={registerFields.handleChange}
            value={registerFields.values.name}
          />
          {registerFields.errors.name ? (
            <div className='error'>{registerFields.errors.name}</div>
          ) : null}
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            onChange={registerFields.handleChange}
            value={registerFields.values.email}
          />
          {registerFields.errors.email ? (
            <div className='error'>{registerFields.errors.email}</div>
          ) : null}
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            name='password'
            id='password'
            onChange={registerFields.handleChange}
            value={registerFields.values.password}
          />
          {registerFields.errors.password ? (
            <div className='error'>
              {registerFields.errors.password}
            </div>
          ) : null}
        </div>
        <div className='form-control'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='text'
            name='confirmPassword'
            id='confirmPassword'
            onChange={registerFields.handleChange}
            value={registerFields.values.confirmPassword}
          />
          {registerFields.errors.confirmPassword ? (
            <div className='error'>
              {registerFields.errors.confirmPassword}
            </div>
          ) : null}
        </div>
        <button className='btn btn-primary' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
};
