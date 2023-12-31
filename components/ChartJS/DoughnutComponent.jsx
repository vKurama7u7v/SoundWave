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
import { Doughnut, Bar } from "react-chartjs-2";

function DoughnutComponent(props) {
  const { dataset, label, display, position, radius, width, height } = props;

  if (!dataset) {
    return null;
  }
  const { labels, values } = dataset;

  const data = {
    labels: labels,
    datasets: [
      {
        label: label ? label : "",
        data: values,
        //  backgroundColor: setColors(dataset),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(201, 203, 207, 1)",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderColor: "rgba(255, 255, 255, 0.1)",
        // hoverBorderColor: "rgba(255, 255, 255, 0.1)",
        // borderWidth: 4,
        // weight: 5,
        // borderRadius: 4,
        // circumference: 180,
        // rotation: 270,
        borderRadius: 3,
        spacing: 4,
        radius: radius, // Tamaño de la grafica
        hoverOffset: 5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: display,
        position: position ? position : "top",
      },
      colors: {
        enabled: true,
      },
      // title: {
      //   display: true,
      //   text: "Custom Chart Title",
      //   padding: {
      //     bottom: 10,
      //   },
      // },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <>
      <div style={{ width: width ? width : "", height: height ? height : "" }}>
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
}

export default DoughnutComponent;
