import React from "react";
import Event from "./Event";
import moment from "moment";

const DailyEvents = (props) => {
  const currentDate = moment(props.date).format("MM/DD/yyyy");
  return (
    <>
      {Array.from(Array(24), (e, i) => {
        return <Event key={i} item={i} date={currentDate} />;
      })}
    </>
  );
};

export default DailyEvents;
