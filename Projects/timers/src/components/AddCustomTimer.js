import React, {useState, useEffect} from "react";
import {
  SnackbarContent,
  TextField,
  Button,
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    marginLeft: "30%",
    marginRight: "30%",
    height: 150,
  },
  media: {},
  contentLeft: {
    marginLeft: "35%",
    fontSize: "22px",
  },
  childRoot: {
    maxWidth: "30%",
  },
});

const useChildStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: 300,
    marginBottom: "20px",
    marginTop: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const AddCustomTimer = () => {
  const classes = useStyles();
  const [timers, setTimers] = useState([]);
  const [currentTimer, setCurrentTimer] = useState("");

  useEffect(() => {}, [timers]);
  const updateCurrentTimer = (e) => {
    setCurrentTimer(e.target.value);
  };

  const updateTimers = () => {
    if (currentTimer.length == 0 || !parseInt(currentTimer)) {
      return alert("Input should be a number");
    }
    setTimers((_timers) => [..._timers, currentTimer]);
    setCurrentTimer("");
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardContent className={classes.media}>
          <Typography className={classes.contentLeft}>
            <TextField
              id='outlined-number'
              label='Minutes'
              variant='outlined'
              defaultValue='10'
              value={currentTimer}
              onChange={updateCurrentTimer}
            />
          </Typography>
        </CardContent>
        <CardActions className={classes.contentLeft}>
          <Button
            variant='contained'
            color='primary'
            onClick={updateTimers}>
            Add Timer Interval
          </Button>
        </CardActions>
      </Card>
      <ShowAllTimers currentTimers={timers} />
    </div>
  );
};

const ShowAllTimers = (props) => {
  const classes = useChildStyles();
  const startTimer = (e) => {
    debugger;
  };

  return (
    <>
      {props.currentTimers
        ? props.currentTimers.map((_currentTimer) => {
            return (
              <>
                <Card className={classes.root}>
                  <CardContent className={classes.content}>
                    <Typography
                      variant='subtitle1'
                      color='textSecondary'>
                      {_currentTimer}
                    </Typography>
                  </CardContent>
                  <Button
                    className={classes.cover}
                    variant='contained'
                    color='primary'
                    value={_currentTimer}
                    onClick={startTimer(_currentTimer)}>
                    Start Timer
                  </Button>
                </Card>
              </>
            );
          })
        : ""}
    </>
  );
};

const RunTimer = (props) => {
  const classes = useStyles();
  const [tick, setTick] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHour] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (tick === 59) {
        if (minutes === 59) {
          setTick(0);
          setMinutes(0);
          setHour((hours) => hours + 1);
        } else {
          setTick(0);
          setMinutes((minutes) => minutes + 1);
        }
      } else {
        setTick((tick) => tick + 1);
      }
    }, 1000);
  }, [tick]);

  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.media}>
          <Typography className={classes.contentLeft}>
            <i className='fas fa-hourglass rotate'></i>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size='small'
            color='primary'
            className={classes.contentLeft}>
            {minutes} : {tick}
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default AddCustomTimer;
