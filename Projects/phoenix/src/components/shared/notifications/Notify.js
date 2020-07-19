import React, {useState} from "react";
import {Snackbar, Button} from "@material-ui/core";
import closeIcon from "@material-ui/icons/Close";
import MuiAlert from "@material-ui/lab/Alert";

export const Notify = ({type, message}) => {
  const [show, setShow] = useState(true);
  //{type, message}
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        autoHideDuration={6000}
        open={show}
        onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}
