import React, {useState, useEffect} from "react";
import {SnackbarContent, TextField, Button} from "@material-ui/core";

const AddCustomTimer = () => {
  const [timers, setTimers] = useState([]);
  const [currentTimer, setCurrentTimer] = useState("");

  useEffect(() => {}, [timers]);
  const updateCurrentTimer = (e) => {
    setCurrentTimer(e.target.value);
  };

  const updateTimers = () => {
    setTimers((_timers) => [..._timers, currentTimer]);
    setCurrentTimer("");
  };

  return (
    <div>
      <div className='row'>
        <TextField
          id='outlined-number'
          label='Number'
          variant='outlined'
          value={currentTimer}
          onChange={updateCurrentTimer}
        />
      </div>
      <div className='row'>
        <Button
          variant='contained'
          color='primary'
          onClick={updateTimers}>
          Add Timer Interval
        </Button>
      </div>
      <div
        className='row'
        style={{
          marginLeft: "100px",
          marginRight: "100px",
        }}>
        <ShowAllTimers currentTimers={timers} />
      </div>
    </div>
  );
};

const ShowAllTimers = (props) => {
  return (
    <div>
      {props.currentTimers
        ? props.currentTimers.map((_currentTimer) => {
            return (
              <SnackbarContent
                message={_currentTimer}
                style={{marginBottom: "10px"}}></SnackbarContent>
            );
          })
        : ""}
    </div>
  );
};

export default AddCustomTimer;
