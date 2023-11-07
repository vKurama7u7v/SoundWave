import React from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import CardLayout from "@/layouts/CardLayout";
import GridLayout from "@/layouts/GridLayout";
import useAuth from "@/hooks/useAuth";
import CardProfileSection from "@/sections/Dashboard/CardProfileSection";
import CardTitleComponent from "@/components/Titles/CardTitleComponent";
import CardDropdownComponent from "@/components/Dropdowns/CardDropdownComponent";

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

function DashboardScreen() {
  const { data_user } = useAuth();

  const colors = [
    "rgba(255, 99, 132)",
    "rgba(54, 162, 235)",
    "rgba(255, 206, 86)",
    "rgba(75, 192, 192)",
    "rgba(153, 102, 255)",
    "rgba(255, 159, 64)",
  ];

  const dataset = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

  const setColors = (data) => {
    let array_colors = [];
    for (let index = 0; index < data.length; index++) {
      const number = Math.floor(Math.random() * data.length);
      const element = colors[number];
      array_colors.push(element);
    }

    return array_colors || [];
  };

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        //  backgroundColor: setColors(dataset),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
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
        radius: 70, // Tamaño de la grafica
        hoverOffset: 5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "left",
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
      <section className="dashboard__kpis m-6 xl:m-10">
        <GridLayout>
          <CardLayout custom="row-span-2">
            <CardProfileSection />
          </CardLayout>
          <CardLayout custom="">
            <CardTitleComponent>
              <div class="flex items-center gap-x-2">
                <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                  <i class="uil uil-grin text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-base font-medium text-gray-800">Mood Meter</h3>
              </div>

              <CardDropdownComponent>
                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  Last 4 Weeks
                </a>
                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  6 Months
                </a>
                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  All
                </a>
              </CardDropdownComponent>
            </CardTitleComponent>

            <div style={{ width: "100%" }}>
              <Doughnut data={data} options={options} />
            </div>
          </CardLayout>
          <CardLayout>hola 3</CardLayout>
          <CardLayout>hola 4</CardLayout>
          <CardLayout>hola 5</CardLayout>
        </GridLayout>
      </section>
    </>
  );
}

export default DashboardScreen;
