import React from "react";
import {
  TextField,
  makeStyles,
  Button,
  Container,
} from "@material-ui/core";
import "../App.css";
import useStyles from "../styles";

const Step1 = (props) => {
  const classes = useStyles();
  console.log(props.register());
  return (
    <Container maxWidth='sm'>
      <h4 style={{color: "Green"}}>MultiStep Form Example</h4>
      <div>
        <TextField
          className={classes.fields}
          variant='outlined'
          label='User Name'
          name='username'
          inputRef={props.register()}
        />
      </div>
      <div>
        <TextField
          className={classes.fields}
          variant='outlined'
          label='First Name'
          name='firstname'
          inputRef={props.register()}
        />
      </div>
      <div>
        <TextField
          className={classes.fields}
          variant='outlined'
          label='Last Name'
          name='lastname'
          inputRef={props.register()}
        />
      </div>
      <div>
        <TextField
          className={classes.fields}
          variant='outlined'
          label='Email'
          name='email'
          inputRef={props.register()}
        />
      </div>
      <div>
        <TextField
          className={classes.fields}
          variant='outlined'
          label='Password'
          type='password'
          name='password'
          inputRef={props.register()}
        />
      </div>
      <div>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classes.submitFields}
          onClick={() => props.onClick(1)}>
          Next
        </Button>
      </div>
    </Container>
  );
};

export default Step1;
