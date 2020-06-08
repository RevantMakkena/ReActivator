import React from "react";
import {
  TextField,
  makeStyles,
  Button,
  Container,
} from "@material-ui/core";
import "../App.css";
import useStyles from "../styles";

const Step2 = (props) => {
  const classes = useStyles();
  const onSubmit = (e) => {
    debugger;
    return false;
  };
  return (
    <Container maxWidth='sm'>
      <h4 style={{color: "Green"}}>MultiStep Form Example</h4>
      <form onSubmit={props.handleSubmit(onSubmit)}>
        <div>
          <TextField
            className={classes.fields}
            variant='outlined'
            label='User Name'
            name='username'
            inputRef={props.register({required: true, maxLength: 5})}
          />
        </div>
        <div>
          <TextField
            className={classes.fields}
            variant='outlined'
            label='First Name'
            name='firstname'
            inputRef={props.register({required: true, maxLength: 5})}
          />
        </div>
        <div>
          <TextField
            className={classes.fields}
            variant='outlined'
            label='Last Name'
            name='lastname'
            inputRef={props.register({required: true, maxLength: 5})}
          />
        </div>
        <div>
          <TextField
            className={classes.fields}
            variant='outlined'
            label='Email'
            name='email'
            inputRef={props.register({required: true, maxLength: 5})}
          />
        </div>
        <div>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.submitFields}
            onClick={() => props.onClick(0)}>
            Previous
          </Button>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.submitFields}
            onClick={() => props.onClick(2)}>
            Next
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Step2;
