import React, {useState, useEffect} from "react";
import {getUser, putUserApi} from "./UsersApi";
import {ToastContainer, toast} from "react-toastify";
import {
  TextField,
  makeStyles,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";

export const EditUser = ({match}) => {
  const [user, setUser] = useState();
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [email, setEmail] = useState();
  const [phNumber, setPhNumber] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const usr = await getUser(match.params.id);
      setUser(usr);
      setFName(usr.First_Name);
      setLName(usr.Last_Name);
      setEmail(usr.Email);
      setPhNumber(usr.PhoneNumber);
      setState(usr.State);
      setCity(usr.City);
    };
    getData();
  }, [match.params.id]);

  const onFirstNameChange = (e) => {
    setFName(e.target.value);
  };

  const onLastNameChange = (e) => {
    setLName(e.target.value);
  };

  const onPhoneNumberChange = (e) => {
    setPhNumber(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onCityChange = (e) => {
    setCity(e.target.value);
  };
  const onStateChange = (e) => {
    setState(e.target.value);
  };

  const updateUser = () => {
    let currentUser = user;
    currentUser.First_Name = fName;
    currentUser.Last_Name = lName;
    currentUser.PhoneNumber = phNumber;
    currentUser.Email = email;
    currentUser.City = city;
    currentUser.State = state;
    setUser(currentUser);
    const updateUserInDb = async () => {
      const response = await putUserApi(user);
      if (response === 200) {
        history.push("/users");
      }
    };
    updateUserInDb();
  };

  return (
    <>
      {user ? (
        <Container fixed>
          <div>
            <TextField
              style={{marginTop: "20px", width: "500px"}}
              variant='outlined'
              label='First Name'
              name='FirstName'
              value={fName || ""}
              onChange={onFirstNameChange}
            />
            <TextField
              style={{marginTop: "20px", width: "500px"}}
              variant='outlined'
              label='Last Name'
              name='LastName'
              value={lName || ""}
              onChange={onLastNameChange}
            />
            <TextField
              style={{marginTop: "20px", width: "500px"}}
              variant='outlined'
              label='Phone Number'
              name='PhoneNumber'
              value={phNumber || ""}
              onChange={onPhoneNumberChange}
            />
            <TextField
              style={{marginTop: "20px", width: "500px"}}
              variant='outlined'
              label='Email'
              name='Email'
              value={email || ""}
              onChange={onEmailChange}
            />
            <TextField
              style={{marginTop: "20px", width: "500px"}}
              variant='outlined'
              label='City'
              name='City'
              value={city || ""}
              onChange={onCityChange}
            />
            <TextField
              style={{marginTop: "20px", width: "500px"}}
              variant='outlined'
              label='State'
              name='State'
              value={state || ""}
              onChange={onStateChange}
            />
          </div>
          <div style={{marginTop: "10px", marginLeft: "325px"}}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              style={{width: "160px", marginRight: "30px"}}
              onClick={updateUser}>
              update
            </Button>
            <Link to='/users'>
              <Button
                type='submit'
                variant='contained'
                color='secondary'
                style={{width: "160px", marginRight: "30px"}}>
                Cancel
              </Button>
            </Link>
          </div>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};
