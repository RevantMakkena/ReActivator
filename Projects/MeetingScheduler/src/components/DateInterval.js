import React from "react";
import moment from "moment";

const DateInterval = (props) => {
  console.log(moment(props.date).date());
  console.log(moment(props.date).format("MM/DD/yyyy"));
  return (
    <>
      <h4>This is the scheduler</h4>
    </>
  );
};

export default DateInterval;
