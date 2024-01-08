import React from "react";
import { Radar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const frontdata = {
  labels: ['HTML','CSS/SCSS','JavaScript','jQuery','React','Astro'],
  datasets: [
    {
      label:false,
      data: [4, 4, 3, 4, 2, 2],
      backgroundColor: "rgba(37, 157, 159, 0.2)",
      borderColor: "rgba(31, 124, 126, 1)",
      borderWidth: 2,
    },
  ],
};

const backdata = {
  labels: ['Docker & Docker Compose','Linux','PHP','Mysql(MariaDB)','Nginx','Python'],
  datasets: [
    {
      label:false,
      data: [3, 3, 3, 3, 3, 3],
      backgroundColor: "rgba(12, 98, 148,0.2)",
      borderColor: "rgba(8, 62, 93, 1)",
      borderWidth: 2,
    },
  ],
};

const options = {
  scales: {
    r: {
      min: 0,
      max: 5,
      stepSize: 1,
    },
  },
  plugins:{
    legend:{
       display:false
    }
 },
};

function RadarChart() {
  return (
    <div className="flex chart">
      <div className="chart">
        <h3>Frontend</h3>
        <Radar data={frontdata} options={options} />
      </div>
      <div className="chart">
        <h3>Backend &amp; Dev Ops</h3>
        <Radar data={backdata} options={options} />
      </div>
    </div>
  );
}

export default RadarChart;