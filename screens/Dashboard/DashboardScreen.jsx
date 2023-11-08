import React, { useState, useEffect } from "react";

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
import CardLayout from "@/layouts/CardLayout";
import GridLayout from "@/layouts/GridLayout";
import useAuth from "@/hooks/useAuth";
import CardProfileSection from "@/sections/Dashboard/CardProfileSection";
import CardTitleComponent from "@/components/Titles/CardTitleComponent";
import CardDropdownComponent from "@/components/Dropdowns/CardDropdownComponent";
import SongsTableComponent from "@/components/Tables/SongsTableComponent";
import { getMyTopTracks } from "@/api/user.api";

ChartJS.register(...registerables);

function DashboardScreen() {
  const [topTracks, setTopTracks] = useState(null);

  const { auth, data_user, logout } = useAuth();

  useEffect(() => {
    (async () => {
      if (data_user) {
        const response = await getMyTopTracks(
          logout,
          "?limit=50&offset=0&time_range=short_term"
        );
        setTopTracks(response);
        console.log(topTracks);
      }
    })();
  }, [data_user]);

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

  const dataBar = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
          "rgba(153, 102, 255)",
          "rgba(201, 203, 207)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const optionsBar = {
    plugins: {
      legend: {
        display: false,
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
      <section className="dashboard__kpis m-6  xl:mx-10">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold text-gray-600 capitalize">
            Dashboard
          </h1>
          {/* Breadrumbs */}
          <div class="flex items-center pb-6 overflow-x-auto whitespace-nowrap">
            <a href="#" class="text-gray-600 ">
              <i class="uil uil-estate text-lg"></i>
            </a>

            <span class="mx-2 text-gray-500 ">
              <i class="uil uil-angle-right text-lg"></i>
            </span>

            <a href="#" class="text-esmerald-500 font-medium">
              Dashboard
            </a>
          </div>
        </div>

        <GridLayout>
          {/*  */}
          <CardLayout custom="">
            <CardProfileSection />
          </CardLayout>

          {/* Mood Meter */}
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
                  Short Term
                </a>
                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  Medium Term
                </a>
                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  Long Term
                </a>
              </CardDropdownComponent>
            </CardTitleComponent>

            <div style={{ width: "100%" }}>
              <Doughnut data={data} options={options} />
            </div>
          </CardLayout>

          {/* Generos Musicales */}
          <CardLayout custom="">
            <CardTitleComponent>
              <div class="flex items-center gap-x-2">
                <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                  <i class="uil uil-headphones text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-base font-medium text-gray-800">
                  Generos Musicales
                </h3>
              </div>

              <CardDropdownComponent>
                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  Short Term
                </a>
                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  Medium Term
                </a>
                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  Long Term
                </a>
              </CardDropdownComponent>
            </CardTitleComponent>

            <div style={{ width: "100%" }}>
              <Doughnut data={data} options={options} />
            </div>
          </CardLayout>

          {/* Analisis */}
          <CardLayout>
            <CardTitleComponent>
              <div class="flex items-center gap-x-2">
                <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                  <i class="uil uil-analysis text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-base font-medium text-gray-800">Analisis</h3>
              </div>

              <CardDropdownComponent>
                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  Short Term
                </a>
                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  Medium Term
                </a>
                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  Long Term
                </a>
              </CardDropdownComponent>
            </CardTitleComponent>

            <div style={{ width: "100%" }}>
              <Bar data={dataBar} options={optionsBar} />
            </div>
          </CardLayout>

          <CardLayout>hola 5</CardLayout>

          <CardLayout>hola 6</CardLayout>

          {/* Tabla */}
          <CardLayout custom="col-span-3">
            <CardTitleComponent>
              <div class="flex items-center gap-x-2">
                <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                  <i class="uil uil-music text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-base font-medium text-gray-800">Top</h3>
              </div>

              <CardDropdownComponent>
                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  Songs
                </a>
                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  Artists
                </a>
                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  Genres
                </a>
              </CardDropdownComponent>
            </CardTitleComponent>

            <SongsTableComponent data={topTracks} />
          </CardLayout>
        </GridLayout>
      </section>
    </>
  );
}

export default DashboardScreen;
