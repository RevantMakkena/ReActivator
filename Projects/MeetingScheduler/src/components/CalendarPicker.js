import React, {useState} from "react";
import DateFnsUtils from "@date-io/date-fns"; // import
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import {Container, Grid, makeStyles} from "@material-ui/core";
import DateInterval from "./DateInterval";
import DailyEvents from "./DailyEvents";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const CalendarPicker = () => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <>
      <div className={classes.root}>
        <Grid containers spacing='3'>
          <Grid item>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                autoOk
                orientation='landscape'
                variant='static'
                openTo='date'
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={3}>
            <DateInterval date={selectedDate} />
          </Grid>
          <Grid item xs={3}>
            <DailyEvents date={selectedDate} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default CalendarPicker;
