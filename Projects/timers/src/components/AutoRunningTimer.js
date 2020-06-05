import React, {useState, useEffect} from "react";
import "./App.css";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 100,
  },
  contentLeft: {
    marginLeft: "35%",
    fontSize: "22px",
  },
});

const AutoRunningTimer = () => {
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
            {hours} : {minutes} : {tick}
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default AutoRunningTimer;
