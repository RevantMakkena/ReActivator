import React from "react";
import {Backdrop, CircularProgress} from "@material-ui/core";

export const Freeze = ({show}) => {
  return (
    <>
      <Backdrop open={show}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </>
  );
};
