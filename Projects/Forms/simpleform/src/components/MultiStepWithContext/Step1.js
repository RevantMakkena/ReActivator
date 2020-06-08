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

const Step1 = (props) => {
  const [pag1, setPag1] = useContext(UserDataContext);
  const classes = useStyles();
  const onFieldChange = (e) => {
    if (e.target.name === "userName")
      setPag1({
        userName: e.target.value,
        firstName: pag1.firstName,
        lastName: pag1.lastName,
      });
    else if (e.target.name === "lastName")
      setPag1({
        userName: pag1.userName,
        firstName: pag1.firstName,
        lastName: e.target.value,
      });
    else if (e.target.name === "firstName")
      setPag1({
        userName: pag1.userName,
        firstName: e.target.value,
        lastName: pag1.lastName,
      });
  };

  return (
    <Container maxWidth='sm'>
      <h4 style={{color: "Green"}}>MultiStep Context Example</h4>
      <div>
        <TextField
          className={classes.fields}
          variant='outlined'
          label='User Name'
          name='userName'
          onChange={onFieldChange}
          value={pag1.userName}
        />
      </div>
      <div>
        <TextField
          className={classes.fields}
          variant='outlined'
          label='First Name'
          name='firstName'
          onChange={onFieldChange}
          value={pag1.firstName}
        />
      </div>
      <div>
        <TextField
          className={classes.fields}
          variant='outlined'
          label='Last Name'
          name='lastName'
          onChange={onFieldChange}
          value={pag1.lastName}
        />
      </div>
      <div>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          onChange={onFieldChange}
          className={classes.submitFields}
          onClick={() => props.onClick(1)}>
          Next
        </Button>
      </div>
    </Container>
  );
};

export default Step1;
