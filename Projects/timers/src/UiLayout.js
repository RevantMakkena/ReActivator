import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import {Link} from "react-router-dom";
import AutoRunningTimer from "./components/AutoRunningTimer";
import App from "./components/App";
import AddCustomTimer from "./components/AddCustomTimer";
import TimerWithProps from "./components/TimerWithProps";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function LabTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position='static'>
          <TabList onChange={handleChange}>
            <Tab label='home' value='home' />
            <Tab label='running-timer' value='running-timer' />
            <Tab label='custom-timer' value='custom-timer' />
            <Tab label='timer-with-input' value='timer-with-input' />
          </TabList>
        </AppBar>
        <TabPanel value='home'>
          <App />
        </TabPanel>
        <TabPanel value='running-timer'>
          <AutoRunningTimer />
        </TabPanel>
        <TabPanel value='custom-timer'>
          <AddCustomTimer />
        </TabPanel>
        <TabPanel value='timer-with-input'>
          <TimerWithProps />
        </TabPanel>
      </TabContext>
    </div>
  );
}
