import React, {useContext} from "react";
import {
  TextField,
  makeStyles,
  Button,
  Container,
} from "@material-ui/core";
import "../App.css";
import useStyles from "../styles";
import {UserDataContext} from "./UserDataContext";

const Step2 = (props) => {
  const classes = useStyles();
  const [pag1, setPag1, pag2, setPag2, pag3, setPag3] = useContext(
    UserDataContext
  );
  const onFieldChange = (e) => {
    if (e.target.name === "email")
      setPag2({
        email: e.target.value,
        phone: pag2.phone,
      });
    else if (e.target.name === "phone")
      setPag2({
        email: pag2.email,
        phone: e.target.value,
      });
  };
  return (
    <Container maxWidth='sm'>
      <h4 style={{color: "Green"}}>MultiStep Context Example</h4>
      <div>
        <TextField
          className={classes.fields}
          variant='outlined'
          label='Email'
          name='email'
          onChange={onFieldChange}
          value={pag2.email}
        />
      </div>
      <div>
        <TextField
          className={classes.fields}
          variant='outlined'
          label='Phone Number'
          name='phone'
          onChange={onFieldChange}
          value={pag2.phone}
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
    </Container>
  );
};

export default Step2;
