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

import DoughnutComponent from "@/components/ChartJS/DoughnutComponent";
import BarComponent from "@/components/ChartJS/BarComponent";

import { getMyFullTop, getMyTop, getTracksAudioFeatures } from "@/api/user.api";
import { getMoodTrack } from "@/utils/mood-meter.utils";
import RadarComponent from "@/components/ChartJS/RadarComponent";
import TracksTableComponent from "@/components/Tables/TracksTableComponent";
import ArtistsTablesComponent from "@/components/Tables/ArtistsTablesomponent";

ChartJS.register(...registerables);

function DashboardScreen() {
  const [topTracks, setTopTracks] = useState(null);
  const [topArtist, setTopArtist] = useState(null);
  const [audioFeatures, setAudioFeatures] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [timeRange, setTimeRange] = useState({
    name: "Last 4 Weeks",
    value: "short_term",
  });

  const [stats, setStats] = useState(null);
  const [moodStats, setMoodStats] = useState(null);
  const [moodTracksStats, setmoodTracksStats] = useState(null);

  const { auth, data_user, logout } = useAuth();

  useEffect(() => {
    (async () => {
      if (data_user) {
        onSetTracksData(logout, timeRange.value);
        onSetTopArtistsData(logout, timeRange.value);
      }
    })();
  }, [data_user, timeRange]);

  // ===== Canciones =====
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
          setMoodStats(onSetMoodStats(resAudioFeat.audio_features));
          setmoodTracksStats(onSetMoodTracksStats(resAudioFeat.audio_features));
        }
      }
    } catch (error) {
      console.log("onSetTracksData:", error);
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
      const data = dataset.slice(0, 15);
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

      return onSetDataAnalysis(sumatoria, data.length, labels);
    }
  };

  const onSetDataAnalysis = (data, total, labels) => {
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

      return { labels, values };
    }
  };

  const onSetMoodStats = (dataset) => {
    if (dataset) {
      let moods = [];
      for (let index = 0; index < dataset.length; index++) {
        const element = getMoodTrack(
          dataset[index].energy,
          dataset[index].valence
        );
        moods.push(element.emotion);
      }

      if (moods.length > 0) {
        const repetidos = {};

        moods.forEach(function (numero) {
          repetidos[numero] = (repetidos[numero] || 0) + 1;
        });

        if (repetidos) {
          let values = [];
          let labels = Object.keys(repetidos);

          for (let i = 0; i < labels.length; i++) {
            let clave = labels[i];
            values.push(repetidos[clave]);
          }

          return { labels, values };
        }
      }
    }
  };

  const onSetMoodTracksStats = (dataset) => {
    if (dataset) {
      let moods = [];
      for (let index = 0; index < dataset.length; index++) {
        const element = getMoodTrack(
          dataset[index].energy,
          dataset[index].valence
        );
        moods.push(element.mood);
      }

      if (moods.length > 0) {
        const repetidos = {};

        moods.sort().forEach(function (numero) {
          repetidos[numero] = (repetidos[numero] || 0) + 1;
        });

        if (repetidos) {
          let values = [];
          let labels = Object.keys(repetidos);

          for (let i = 0; i < labels.length; i++) {
            let clave = labels[i];
            values.push(repetidos[clave]);
          }

          return { labels, values };
        }
      }
    }
  };

  // ===== Artistas =====
  const onSetTopArtistsData = async (logout, time_range) => {
    try {
      const resArtist = await getMyFullTop(
        logout,
        "artists",
        `?limit=50&offset=0&time_range=${time_range}`,
        `?limit=50&offset=49&time_range=${time_range}`
      );

      console.log("restArtist", resArtist);

      if (resArtist) {
        setTopArtist(resArtist);
      }
    } catch (error) {
      console.log("onSetTopArtistsData:", error);
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

          {/* Mood Tracks */}
          <CardLayout custom="">
            <CardTitleComponent>
              <div class="flex items-center gap-x-2">
                <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                  <i class="uil uil-tachometer-fast-alt text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-base font-medium text-gray-800">
                  Mis Canciones
                </h3>
              </div>
            </CardTitleComponent>
            <div className="flex justify-between items-center">
              {/* <div className="">mood</div> */}
              <DoughnutComponent
                dataset={moodTracksStats}
                label={"# de Canciones"}
                display={false}
                position={"top"}
                radius={70}
                width={"100%"}
              />
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
            </CardTitleComponent>

            {/*  */}
            {/* <RadarComponent
              dataset={stats}
              label={"Value"}
              display={false}
              position={"top"}
              radius={120}
            /> */}
          </CardLayout>

          {/* Mood Meter */}
          <CardLayout custom="col-span-2">
            <CardTitleComponent>
              <div class="flex items-center gap-x-2">
                <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                  <i class="uil uil-grin text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-base font-medium text-gray-800">Mood Meter</h3>
              </div>
            </CardTitleComponent>

            <BarComponent
              dataset={moodStats}
              label={"Cantidad"}
              display={false}
              position={"left"}
              radius={120}
            />
          </CardLayout>

          <CardLayout>
            <CardTitleComponent>
              <div class="flex items-center gap-x-2">
                <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                  <i class="uil uil-grin text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-base font-medium text-gray-800">
                  Recomendación del Día
                </h3>
              </div>
            </CardTitleComponent>
          </CardLayout>

          {/* Tabla */}
          <CardLayout custom="col-span-1 md:col-span-2 xl:col-span-3 2xl:col-span-2">
            <CardTitleComponent>
              <div class="flex items-center gap-x-2">
                <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                  <i class="uil uil-music text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-base font-medium text-gray-800">Top</h3>
              </div>
            </CardTitleComponent>

            <TracksTableComponent
              data={topTracks ? topTracks.slice(0, 15) : null}
              features={audioFeatures}
            />

            {/* <SongsTableComponent data={topTracks} features={audioFeatures} /> */}
          </CardLayout>

          {/* Artista */}
          <CardLayout custom="col-span-1 md:col-span-2 xl:col-span-3 2xl:col-span-2">
            <CardTitleComponent>
              <div class="flex items-center gap-x-2">
                <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                  <i class="uil uil-music text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-base font-medium text-gray-800">Top Artists</h3>
              </div>
            </CardTitleComponent>

            <ArtistsTablesComponent
              data={topArtist ? topArtist.slice(0, 15) : null}
            />
          </CardLayout>
        </GridLayout>
      </section>
    </>
  );
}

export default DashboardScreen;
