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
import { Bar } from "react-chartjs-2";

function BarComponent(props) {
  const { dataset, label, display, position } = props;

  if (!dataset) {
    return null;
  }

  const { labels, sumatoria, total } = dataset;

  const onSetData = (data, total) => {
    if (data) {
      const values = [
        data.danceability / total,
        data.energy / total,
        data.acousticness / total,
        data.speechiness / total,
        data.instrumentalness / total,
        data.liveness / total,
        data.valence / total,
      ];

      return values;
    }
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: label ? label : "",
        data: onSetData(sumatoria, total),
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(255, 205, 86)",
          "rgba(255, 159, 64)",
          "rgba(54, 162, 235)",
          "rgba(153, 102, 255)",
          "rgba(201, 203, 207)",
          "rgba(75, 192, 192)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(255, 159, 64)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          "rgb(75, 192, 192)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: display,
        position: position ? position : "left",
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
      <div style={{ width: "100%" }}>
        <Bar data={data} options={options} />
      </div>
    </>
  );
}

export default BarComponent;
