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
import { getMyFullTop, getMyTop, getTracksAudioFeatures } from "@/api/user.api";
import DoughnutComponent from "@/components/ChartJS/DoughnutComponent";
import BarComponent from "@/components/ChartJS/BarComponent";
import { size } from "lodash";

ChartJS.register(...registerables);

function DashboardScreen() {
  const [topTracks, setTopTracks] = useState(null);
  const [audioFeatures, setAudioFeatures] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [timeRange, setTimeRange] = useState({
    name: "Last 4 Weeks",
    value: "short_term",
  });

  const [stats, setStats] = useState(null);

  const { auth, data_user, logout } = useAuth();

  useEffect(() => {
    (async () => {
      if (data_user) {
        onSetTracksData(logout, timeRange.value);
      }
    })();
  }, [data_user, timeRange]);

  const onSetTracksData = async (logout, time_range) => {
    try {
      // Obteniendo el Top 99 de Canciones
      const resTracks = await getMyFullTop(
        logout,
        "tracks",
        `?limit=50&offset=0&time_range=${time_range}`,
        `?limit=50&offset=49&time_range=${time_range}`
      );

      if (resTracks) {
        setTopTracks(resTracks);

        // Obteniendo las Audio Features de mi Top 99
        const resAudioFeat = await getTracksAudioFeatures(logout, resTracks);
        if (resAudioFeat) {
          setAudioFeatures(resAudioFeat);

          setStats(onSetStats(resAudioFeat.audio_features));
          console.log(stats);
        }
      }
    } catch (error) {
      console.log("onSetData:", error);
    }
  };

  const onSetFilter = (time_range) => {
    if (time_range.value !== timeRange.value) {
      setTimeRange(time_range);
      setIsOpen(false);
    }
  };

  const onSetStats = (dataset) => {
    if (dataset) {
      const data = dataset.slice(0, 10);
      let labels = [
        "Danceability",
        "Energy",
        "Acousticness",
        "Speechiness",
        "Instrumentalness",
        "Liveness",
        "Valence",
      ];

      const sumatoria = data.reduce(
        function (acumulador, next) {
          return {
            danceability: acumulador.danceability + next.danceability,
            energy: acumulador.energy + next.energy,
            acousticness: acumulador.acousticness + next.acousticness,
            speechiness: acumulador.speechiness + next.speechiness,
            instrumentalness:
              acumulador.instrumentalness + next.instrumentalness,
            liveness: acumulador.liveness + next.liveness,
            valence: acumulador.valence + next.valence,
          };
        },
        {
          danceability: 0,
          energy: 0,
          acousticness: 0,
          speechiness: 0,
          instrumentalness: 0,
          liveness: 0,
          valence: 0,
        }
      );

      console.log({ sumatoria, labels, total: data.length });
      return { sumatoria, labels, total: data.length };
    }
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

        {/* Dropdown */}
        <div className="mb-6">
          <div class="relative inline-block">
            <button
              class="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-gray-100 rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span class="mx-1">
                {timeRange ? timeRange.name : <>No Seleccionado</>}
              </span>
              <i
                class={
                  isOpen
                    ? "uil uil-angle-up text-lg"
                    : "uil uil-angle-down text-lg"
                }
              ></i>
            </button>

            <div
              class={
                isOpen
                  ? "absolute left-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-md"
                  : "absolute left-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-md hidden"
              }
            >
              <a
                href="#"
                onClick={() =>
                  onSetFilter({
                    name: "Last 4 Weeks",
                    value: "short_term",
                  })
                }
                class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
              >
                Last 4 Weeks
              </a>
              <a
                href="#"
                onClick={() =>
                  onSetFilter({
                    name: "Last 6 Months",
                    value: "medium_term",
                  })
                }
                class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
              >
                Last 6 Months
              </a>
              <a
                href="#"
                onClick={() =>
                  onSetFilter({
                    name: "All Time",
                    value: "long_term",
                  })
                }
                class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
              >
                All Time
              </a>
            </div>
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
            </CardTitleComponent>

            <DoughnutComponent
              data={null}
              label={"Cantidad"}
              display={true}
              position={"left"}
            />
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
            </CardTitleComponent>

            {/*  */}
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
            </CardTitleComponent>

            <BarComponent dataset={stats} label={"Value"} display={false} />
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
            </CardTitleComponent>

            <SongsTableComponent data={topTracks} features={audioFeatures} />
          </CardLayout>
        </GridLayout>
      </section>
    </>
  );
}

export default DashboardScreen;
