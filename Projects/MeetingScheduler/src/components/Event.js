import React from "react";
import {SnackbarContent, TextField, Button} from "@material-ui/core";

const Event = (props) => {
  return (
    <h4>
      <SnackbarContent
        message={`${props.date} - Event ${props.item}`}
        style={{
          marginBottom: "10px",
        }}></SnackbarContent>
      <TextField variant='standard' label='Notes'></TextField>
      <Button variant='contained' color='primary'>
        Submit
      </Button>
    </h4>
  );
};

export default Event;
