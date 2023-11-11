import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
  CategoryScale,
  LinearScale,
  registerables,
} from "chart.js";
import { Radar } from "react-chartjs-2";

function RadarComponent(props) {
  const { dataset, label, display, position, radius } = props;

  if (!dataset) {
    return null;
  }
  const { labels, values } = dataset;

  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: values,
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
    // radius: radius,
  };

  const options = {
    plugins: {
      legend: {
        display: display ? display : false,
        position: position ? position : "top",
      },
      colors: {
        enabled: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <>
      <div style={{ width: "100%", height: "350px" }}>
        <Radar data={data} options={options} />
      </div>
    </>
  );
}

export default RadarComponent;
