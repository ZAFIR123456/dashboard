import React, { useState } from "react";
import Chart from "react-apexcharts";

function ChartComponent() {
  
  const [options] = useState({
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      labels: {
        style: {
          colors: "#9AA0AC" // Set the X-axis label color to white
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: "#9AA0AC" // Set the X-axis label color to white
        }
      }
    },
    
  });

  const [series] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]);
  

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="bar" width= "96%" />
        </div>
      </div>
    </div>
  );
}

export default ChartComponent;
