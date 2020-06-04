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
      <div
        className='row'
        style={{marginLeft: "30%", marginRight: "30%"}}>
        <TextField
          id='outlined-number'
          label='Number'
          variant='outlined'
          value={currentTimer}
          onChange={updateCurrentTimer}
        />
      </div>
      <div
        className='row'
        style={{marginLeft: "30%", marginRight: "30%"}}>
        <Button
          variant='contained'
          color='primary'
          onClick={updateTimers}
          style={{height: "38px"}}>
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
  const startTimer = (e) => {
    debugger;
  };
  return (
    <div>
      {props.currentTimers
        ? props.currentTimers.map((_currentTimer) => {
            return (
              <>
                <div className='row'>
                  <SnackbarContent
                    message={_currentTimer}
                    style={{marginBottom: "10px"}}></SnackbarContent>
                  <Button
                    variant='contained'
                    color='primary'
                    value={_currentTimer}
                    onClick={startTimer(_currentTimer)}>
                    Start Timer
                  </Button>
                </div>
              </>
            );
          })
        : ""}
    </div>
  );
};

export default AddCustomTimer;
