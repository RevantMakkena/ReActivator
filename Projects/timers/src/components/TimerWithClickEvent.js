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
  Grid,
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
    backgroundColor: "darkcyan",
  },
  cover: {
    width: 151,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const rightChildStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: 200,
    marginLeft: "40%",
  },
}));

const TimerWithClickEvent = () => {
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
      <Grid container style={{marginTop: "2%"}}>
        <ShowAllTimers currentTimers={timers} />
      </Grid>
    </div>
  );
};

const ShowAllTimers = (props) => {
  const classes = useChildStyles();
  return (
    <>
      {props.currentTimers
        ? props.currentTimers.map((_currentTimer) => {
            return (
              <>
                <Grid item xs={3}>
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
                      value={_currentTimer}>
                      Start Timer
                    </Button>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <RunTimer time={_currentTimer} />
                </Grid>
              </>
            );
          })
        : ""}
    </>
  );
};

const RunTimer = (props) => {
  const classes = rightChildStyles();
  const [tick, setTick] = useState(59);
  const [minutes, setMinutes] = useState(props.time - 1);
  const [icon, setIcon] = useState("fas fa-hourglass rotate");

  console.log(props.time);
  useEffect(() => {
    setTimeout(() => {
      if (minutes === 0 && tick === 0) {
        setIcon("fas fa-hourglass");
      } else if (tick === 0) {
        setTick(59);
        setMinutes((minutes) => minutes - 1);
      } else {
        setTick((tick) => tick - 1);
      }
    }, 1000);
  }, [tick]);

  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.media}>
          <Typography className={classes.contentLeft}>
            <i className={icon}></i>
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
export default TimerWithClickEvent;
