import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {
  TextField,
  makeStyles,
  Button,
  Container,
} from "@material-ui/core";
import {ToastContainer, toast} from "react-toastify";
import "./App.css";
import useStyles from "./styles";

const UseFormHookEx = () => {
  const classes = useStyles();
  const {register, handleSubmit, watch, errors} = useForm();

  const onSubmit = (e) => {
    toast.success("Data is successfully submitted!!", {
      position: toast.POSITION.TOP_LEFT,
    });
    return false;
  };
  return (
    <>
      <ToastContainer />
      <Container maxWidth='sm'>
        <h4 style={{color: "Green"}}>Use Form Example</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField
              className={classes.fields}
              variant='outlined'
              label='User Name'
              name='username'
              inputRef={register({required: true, maxLength: 5})}
            />
            {errors.username && <p>Username is required</p>}
          </div>
          <div>
            <TextField
              className={classes.fields}
              variant='outlined'
              label='First Name'
              name='firstname'
              inputRef={register({required: true, maxLength: 5})}
            />
            {errors.firstname && <p>First Name is required</p>}
          </div>
          <div>
            <TextField
              className={classes.fields}
              variant='outlined'
              label='Last Name'
              name='lastname'
              inputRef={register({required: true, maxLength: 5})}
            />
            {errors.lastname && <p>Last Name is required</p>}
          </div>
          <div>
            <TextField
              className={classes.fields}
              variant='outlined'
              label='Email'
              name='email'
              inputRef={register({required: true, maxLength: 5})}
            />
            {errors.email && <p>Email is required</p>}
          </div>
          <div>
            <TextField
              className={classes.fields}
              variant='outlined'
              label='Password'
              type='password'
              name='password'
              inputRef={register({required: true, maxLength: 10})}
            />
            {errors.password && <p>Password is required</p>}
          </div>
          <div>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.submitFields}>
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default UseFormHookEx;
