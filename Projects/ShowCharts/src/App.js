import React from "react";
import "./App.css";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import {BarChartEx} from "./components/BarChart";
import DoughnutChart from "./components/Doughnut";
import BubbleChart from "./components/Bubble";
import HorizontalBarChart from "./components/HorizontalBar";
import LineChart from "./components/Line";
import PieChart from "./components/Pie";
import PolarChart from "./components/Polar";
import RadarChart from "./components/Radar";
import ScatterChart from "./components/Scatter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to='/BarChart'>Bar Chart</Link>
        {" | "}
        <Link to='/Doughnut'>Doughnut Chart</Link>
        {" | "}
        <Link to='/Bubble'>Bubble Chart</Link>
        {" | "}
        <Link to='/HorizantalBar'>HorizantalBar Chart</Link>
        {" | "}
        <Link to='/Line'>Line Chart</Link>
        {" | "}
        <Link to='/Pie'>Pie Chart</Link>
        {" | "}
        <Link to='/Polar'>Polar Chart</Link>
        {" | "}
        <Link to='/Radar'>Radar Chart</Link>
        {" | "}
        <Link to='/Scatter'>Scatter Chart</Link>
        {" | "}

        <Route path='/BarChart' component={BarChartEx}></Route>
        <Route path='/Doughnut' component={DoughnutChart}></Route>
        <Route path='/Bubble' component={BubbleChart}></Route>
        <Route
          path='/HorizantalBar'
          component={HorizontalBarChart}></Route>
        <Route path='/Line' component={LineChart}></Route>
        <Route path='/Pie' component={PieChart}></Route>
        <Route path='/Polar' component={PolarChart}></Route>
        <Route path='/Radar' component={RadarChart}></Route>
        <Route path='/Scatter' component={ScatterChart}></Route>
      </BrowserRouter>
      <div className='App'></div>
    </>
  );
}

export default App;
