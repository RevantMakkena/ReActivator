import React, {useState} from "react";
import {
  TextField,
  makeStyles,
  Button,
  Container,
} from "@material-ui/core";
import {ToastContainer, toast} from "react-toastify";

const useStyles = makeStyles((theme) => ({
  fields: {
    marginTop: "20px",
    width: "100%",
  },
  submitFields: {
    marginTop: "10px",
    width: "50%",
  },
}));
const Form = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      UserName: userName,
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Password: password,
    };
    toast.success("Data is successfully submitted!!", {
      position: toast.POSITION.TOP_LEFT,
    });
    resetFields();
  };

  const resetFields = () => {
    setUserName("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <ToastContainer />

      <Container maxWidth='sm'>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              className={classes.fields}
              variant='outlined'
              label='User Name'
              value={userName}
              onChange={handleUserName}
            />
          </div>
          <div>
            <TextField
              className={classes.fields}
              variant='outlined'
              label='First Name'
              value={firstName}
              onChange={handleFirstName}
            />
          </div>
          <div>
            <TextField
              className={classes.fields}
              variant='outlined'
              label='Last Name'
              value={lastName}
              onChange={handleLastName}
            />
          </div>
          <div>
            <TextField
              className={classes.fields}
              variant='outlined'
              label='Email'
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div>
            <TextField
              className={classes.fields}
              variant='outlined'
              label='Password'
              type='password'
              value={password}
              onChange={handlePassword}
            />
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

export default Form;
