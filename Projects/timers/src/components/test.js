import React, {useState, useEffect} from "react";
import "./App.css";
import {Button, Grid} from "@material-ui/core";

export const Test = () => {
  return (
    <Grid container>
      <Test1 />
    </Grid>
  );
};

const Test1 = () => {
  const [click, setClick] = useState(false);

  setTimeout(() => {
    setClick(click === true ? false : true);
  }, 1000);

  return click ? (
    <>
      <Grid item xs={3}>
        <i className='fas fa-bell'></i>
      </Grid>
      <Test2 />{" "}
    </>
  ) : (
    ""
  );
};

const Test2 = () => {
  const [clickT2, setClickT2] = useState(false);
  setTimeout(() => {
    setClickT2(clickT2 === true ? false : true);
  }, 3000);
  return clickT2 ? (
    <>
      <Grid item xs={3}>
        <i className='fas fa-bell'></i>
      </Grid>
      <Test3 />{" "}
    </>
  ) : (
    ""
  );
};

const Test3 = () => {
  return (
    <Grid item xs={3}>
      <i className='fas fa-bell'></i>
    </Grid>
  );
};
