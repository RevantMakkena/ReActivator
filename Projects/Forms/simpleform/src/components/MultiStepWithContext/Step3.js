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

const Step3 = (props) => {
  const classes = useStyles();
  const [pag1, setPag1, pag2, setPag2, pag3, setPag3] = useContext(
    UserDataContext
  );

  const onFieldChange = (e) => {
    if (e.target.name === "address")
      setPag3({
        address: e.target.value,
        state: pag3.state,
        city: pag3.city,
        zip: pag3.zip,
      });
    else if (e.target.name === "city")
      setPag3({
        address: pag3.address,
        state: pag3.state,
        city: e.target.value,
        zip: pag3.zip,
      });
    else if (e.target.name === "state")
      setPag3({
        address: pag3.address,
        state: e.target.value,
        city: pag3.city,
        zip: pag3.zip,
      });
    else if (e.target.name === "zip")
      setPag3({
        address: pag3.address,
        state: pag3.state,
        city: pag3.city,
        zip: e.target.value,
      });
  };

  return (
    <Container maxWidth='sm'>
      <h4 style={{color: "Green"}}>MultiStep Form Example</h4>
      <div>
        <TextField
          className={classes.fields}
          variant='outlined'
          label='Address'
          name='address'
          onChange={onFieldChange}
          value={pag3.address}
        />
      </div>
      <div>
        <TextField
          className={classes.fields}
          variant='outlined'
          label='City'
          name='city'
          onChange={onFieldChange}
          value={pag3.city}
        />
      </div>
      <div>
        <TextField
          className={classes.fields}
          variant='outlined'
          label='State'
          name='state'
          onChange={onFieldChange}
          value={pag3.state}
        />
      </div>
      <div>
        <TextField
          className={classes.fields}
          variant='outlined'
          label='Zip'
          name='zip'
          onChange={onFieldChange}
          value={pag3.zip}
        />
      </div>
      <div>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classes.submitFields}
          onClick={() => props.onClick(1)}>
          Previous
        </Button>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classes.submitFields}
          onClick={() => props.onClick(3)}>
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default Step3;
