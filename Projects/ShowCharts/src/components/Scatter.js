import React from "react";
import {Scatter} from "react-chartjs-2";

const state = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 77, 99, 110],
    },
  ],
};

const ScatterChart = () => {
  return <Scatter data={state} />;
};

export default ScatterChart;
