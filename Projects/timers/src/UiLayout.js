import React from "../node_modules/@types/react";
import {makeStyles} from "../node_modules/@material-ui/core/styles";
import AppBar from "../node_modules/@material-ui/core/AppBar";
import Tab from "../node_modules/@material-ui/core/Tab";
import TabContext from "../node_modules/@material-ui/lab/TabContext";
import TabList from "../node_modules/@material-ui/lab/TabList";
import TabPanel from "../node_modules/@material-ui/lab/TabPanel";
import {Link} from "../node_modules/react-router-dom";
import AutoRunningTimer from "./components/AutoRunningTimer";
import App from "./components/App";
import AddCustomTimer from "./components/AddCustomTimer";
import TimerWithClickEvent from "./components/TimerWithClickEvent";

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
            <Tab label='timer-with-click' value='timer-with-click' />
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
        <TabPanel value='timer-with-click'>
          <TimerWithClickEvent />
        </TabPanel>
      </TabContext>
    </div>
  );
}
