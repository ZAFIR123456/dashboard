import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const DonutChart = () => {
  const [chartOptions] = useState({
    labels: ['India', 'Pakistan', 'China', 'Denmark'], 
    dataLabels: {
      enabled: false,
      style: {
        colors: ['#fff'], 
      },
    },
  });

  const [chartSeries] = useState([44, 55, 41, 17]);
//   const [chartLabels] = useState(['India', 'Pakistan', 'China', 'Denmark', ]); 

  return (
    <div className="donut">
      <Chart options={chartOptions} series={chartSeries} type="donut" width="310" />
    </div>
  );
}

export default DonutChart;
