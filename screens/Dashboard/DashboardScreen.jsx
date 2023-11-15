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

import useAuth from "@/hooks/useAuth";

import CardLayout from "@/layouts/CardLayout";
import GridLayout from "@/layouts/GridLayout";
import CardProfileSection from "@/sections/Dashboard/CardProfileSection";
import CardTitleComponent from "@/components/Titles/CardTitleComponent";
import TracksTableComponent from "@/components/Tables/TracksTableComponent";
import ArtistsTablesComponent from "@/components/Tables/ArtistsTableComponent";
import AlbumsTableComponent from "@/components/Tables/AlbumsTableComponent";

import DoughnutComponent from "@/components/ChartJS/DoughnutComponent";
import BarComponent from "@/components/ChartJS/BarComponent";
import RadarComponent from "@/components/ChartJS/RadarComponent";

import {
  getMyFullTop,
  getRecommendations,
  getTracksAudioFeatures,
} from "@/api/user.api";
import { getMoodTrack } from "@/utils/mood-meter.utils";
import { orderBy, sortBy } from "lodash";
import GenresTableComponent from "@/components/Tables/GenresTableComponent";
import PlayerWidget from "@/widgets/PlayerWidget/PlayerWidget";
import ImageMoodComponent from "@/components/Images/ImageMoodComponent";

ChartJS.register(...registerables);

function DashboardScreen() {
  const [topTracks, setTopTracks] = useState(null);
  const [topArtist, setTopArtist] = useState(null);
  const [topAlbums, setTopAlbums] = useState(null);
  const [topGenres, setTopGenres] = useState(null);
  const [audioFeatures, setAudioFeatures] = useState(null);
  const [recommendation, setRecommendation] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [timeRange, setTimeRange] = useState({
    name: "Last 4 Weeks",
    value: "short_term",
  });

  const [stats, setStats] = useState(null);
  const [mood, setMood] = useState(null);
  const [moodStats, setMoodStats] = useState(null);
  const [moodTracksStats, setMoodTracksStats] = useState(null);

  const [load, setLoad] = useState(null);
  const [idListTracks, setIdListTracks] = useState(null);
  const [idListArtists, setIdListArtists] = useState(null);

  const { auth, data_user, logout } = useAuth();

  useEffect(() => {
    (async () => {
      if (data_user && timeRange) {
        onSetTracksData(logout, timeRange.value);
        onSetTopArtistsData(logout, timeRange.value);
      }
    })();
  }, [data_user, timeRange]);

  useEffect(() => {
    (async () => {
      if (idListArtists && idListTracks) {
        onSetRecommendationList(logout, 50, idListArtists, idListTracks);
      }
    })();
  }, [idListArtists && idListTracks]);

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
        setIdListTracks(getListOfIds(resTracks, 3));
        setTopAlbums(onSetTopAlbumsData(resTracks));

        // Obteniendo las Audio Features de mi Top 99
        const resAudioFeat = await getTracksAudioFeatures(logout, resTracks);
        if (resAudioFeat) {
          setAudioFeatures(resAudioFeat);

          setStats(onSetStats(resAudioFeat.audio_features));
          setMood(onSetMood(resAudioFeat.audio_features));
          setMoodStats(onSetMoodStats(resAudioFeat.audio_features));
          setMoodTracksStats(onSetMoodTracksStats(resAudioFeat.audio_features));
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

  const onSetMood = (dataset) => {
    if (dataset) {
      const stats = onSetStats(dataset);

      if (!stats) return null;

      const mood = getMoodTrack(stats.values[1], stats.values[6]);

      if (mood) return mood;
    }

    return null;
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

      if (resArtist) {
        setTopArtist(resArtist);
        setIdListArtists(getListOfIds(resArtist, 2));
        setTopGenres(onSetTopGenresData(resArtist));
        // getListOfGenres(onSetTopGenresData(resArtist));
      }
    } catch (error) {
      console.log("onSetTopArtistsData:", error);
    }
  };

  // ===== Albums =====
  const onSetTopAlbumsData = (dataset) => {
    if (dataset && dataset.length > 0) {
      let albums = [];

      dataset.forEach((item) => {
        const element = {
          id: item.album.id,
          name: item.album.name,
          album_type: item.album.album_type,
          href: item.album.href,
          images: item.album.images,
          artists: item.album.artists,
          external_urls: item.album.external_urls,
          release_date: item.album.release_date,
          total: 1,
        };

        albums.push(element);
      });

      if (albums.length > 0) {
        let repeated = {};

        albums.forEach(function (e, i) {
          let id = e["id"];
          if (repeated[id] == undefined) {
            repeated[id] = [e]; //Obtenemos el objeto.
          } else {
            repeated[id].push(e); //Insertamos otro objeto si se repite el indice repetido.
          }
        });

        let output = [];
        for (let i in repeated) {
          //recorremos todos los índices de los objetos repetidos.
          output.push(repeated[i][0]);
          if (repeated[i].length > 1)
            //Hay mas de un objeto repetido.
            output[output.length - 1]["total"] = repeated[i].length; //Como se repite le colocamos la cantidad de repetidos.
        }

        const result = orderBy(output, "total", ["desc", "asc"]);

        return result;
      }
    }
    return null;
  };

  // ===== Genres =====
  const onSetTopGenresData = (dataset) => {
    if (dataset && dataset.length > 0) {
      let genres = [];

      // Obteniendo todos los generos
      dataset.forEach((item) => {
        if (item.genres && item.genres.length > 0) {
          item.genres.forEach((element) => {
            genres.push({ name: element, total: 1 });
          });
        }
      });

      if (genres.length > 0) {
        let repeated = {};

        // Agrupar tipos de generos
        genres.forEach(function (e, i) {
          let id = e["name"];
          if (repeated[id] == undefined) {
            repeated[id] = [e]; //Obtenemos el objeto.
          } else {
            repeated[id].push(e); //Insertamos otro objeto si se repite el indice repetido.
          }
        });

        // Contar los generos
        let output = [];
        for (let i in repeated) {
          //recorremos todos los índices de los objetos repetidos.
          output.push(repeated[i][0]);
          if (repeated[i].length > 1)
            //Hay mas de un objeto repetido.
            output[output.length - 1]["total"] = repeated[i].length; //Como se repite le colocamos la cantidad de repetidos.
        }

        const result = orderBy(output, "total", ["desc", "asc"]);
        // console.log(result);

        return result;
      }
    }

    return null;
  };

  // ===== Recomendaciones =====
  const onSetRecommendationList = async (logout, limit, artists, tracks) => {
    try {
      let seed_artists;
      let seed_tracks;

      if (artists.length > 0) seed_artists = artists.toString();
      if (tracks.length > 0) seed_tracks = tracks.toString();

      if (seed_artists && seed_tracks) {
        const response = await getRecommendations(
          logout,
          limit,
          seed_artists,
          seed_tracks
        );

        // const response = null;

        if (response) {
          const { tracks } = response;

          if (tracks) {
            const filter = onFilterTracks(tracks);
            setRecommendation(filter);
          }
        }

        return null;
      }
    } catch (error) {
      console.log("onSetRecommendationList:", error);
      return null;
    }
  };

  const getListOfIds = (data, limit) => {
    if (data && data.length > 0) {
      let id_list = [];

      data.slice(0, limit).forEach((element) => {
        if (!id_list.includes(element.id)) {
          id_list.push(element.id);
        }
      });

      if (id_list.length > 0) {
        return id_list;
      }
    }

    return null;
  };

  const getListOfGenres = (data) => {
    if (data && data.length > 0) {
      let genres = [];

      // Obteniendo todos los generos
      data.forEach((item) => {
        if (!genres.includes(item.name)) {
          genres.push(item.name);
          console.log(item.name);
        }
      });

      console.log(genres);
    }
  };

  const onFilterTracks = (data) => {
    if (data) {
      let output = [];
      data.forEach((element) => {
        if (element.preview_url) {
          output.push(element);
        }
      });

      if (output.length > 0) {
        return orderBy(output, "popularity", ["desc", "asc"]);
      }
    }

    return null;
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
              class="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-gray-100 rounded-md focus:border-blue-500 focus:ring-opacity-40  focus:ring-blue-300 focus:ring focus:outline-none"
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

            <BarComponent
              dataset={stats ? stats : null}
              label={"Value"}
              display={false}
            />
          </CardLayout>

          {/* Mood Tracks */}
          <CardLayout custom="">
            <CardTitleComponent>
              <div class="flex items-center gap-x-2">
                <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                  <i class="uil uil-tachometer-fast-alt text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-base font-medium text-gray-800">Overview</h3>
              </div>
            </CardTitleComponent>
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center h-[10em] gap-3">
                {/*  */}
                <div class="bg-white w-36">
                  <div class="flex items-center">
                    <div class="relative w-3 h-3 bg-violet-500 rounded-full "></div>
                    <p class="ml-2 text-gray-500 text-xs font-medium">
                      Danceability 💃
                    </p>
                  </div>
                  <div class="flex flex-col justify-start">
                    <p class="text-sm font-bold text-left text-gray-600 ">
                      {stats ? parseInt(stats.values[0] * 100) : 0}%
                    </p>
                    <div class=" bg-gray-200 rounded h-1.5 w-28">
                      <div
                        class="rounded bg-violet-500 h-1.5 transition-all ease-in"
                        style={{
                          width: `${
                            stats ? parseInt(stats.values[0] * 100) : 0
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/*  */}
                <div class="bg-white w-36">
                  <div class="flex items-center">
                    <div class="relative w-3 h-3 bg-amber-400 rounded-full "></div>
                    <p class="ml-2 text-gray-500 text-xs font-medium">
                      Energy 🔋
                    </p>
                  </div>
                  <div class="flex flex-col justify-start">
                    <p class="text-sm font-bold text-left text-gray-600 ">
                      {stats ? parseInt(stats.values[1] * 100) : 0}%
                    </p>
                    <div class=" bg-gray-200 rounded h-1.5 w-28">
                      <div
                        class="rounded bg-amber-400 h-1.5 transition-all ease-in"
                        style={{
                          width: `${
                            stats ? parseInt(stats.values[1] * 100) : 0
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/*  */}
                <div class="bg-white w-36">
                  <div class="flex items-center">
                    <div class="relative w-3 h-3 bg-cyan-500 rounded-full "></div>
                    <p class="ml-2 text-gray-500 text-xs font-medium">
                      Valence 😃
                    </p>
                  </div>
                  <div class="flex flex-col justify-start">
                    <p class="text-sm font-bold text-left text-gray-600 ">
                      {stats ? parseInt(stats.values[6] * 100) : 0}%
                    </p>
                    <div class=" bg-gray-200 rounded h-1.5 w-28">
                      <div
                        class="rounded bg-cyan-500 h-1.5 transition-all ease-in"
                        style={{
                          width: `${
                            stats ? parseInt(stats.values[6] * 100) : 0
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <DoughnutComponent
                dataset={moodTracksStats ? moodTracksStats : null}
                label={"# de Canciones"}
                display={false}
                position={"top"}
                radius={70}
                width={"50%"}
                height={"10em"}
              />
            </div>
          </CardLayout>

          {/* Recomencaciones */}
          <CardLayout custom="row-span-2">
            <CardTitleComponent>
              <div class="flex items-center gap-x-2">
                <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                  <i class="uil uil-headphones text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-base font-medium text-gray-800">
                  Recommended Songs
                </h3>
              </div>
            </CardTitleComponent>

            <PlayerWidget
              data={recommendation ? recommendation : null}
              display_list={true}
              image={data_user ? data_user.images[1].url : null}
            />

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
            {/* <CardTitleComponent>
              <div class="flex items-center gap-x-2">
                <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                  <i class="uil uil-laughing text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-base font-medium text-gray-800">Tu Mood</h3>
              </div>
            </CardTitleComponent> */}

            <ImageMoodComponent mood={mood ? mood : null} />
          </CardLayout>

          {/* Tracks */}
          <CardLayout custom="col-span-1 md:col-span-2 xl:col-span-3 2xl:col-span-2">
            <CardTitleComponent>
              <div class="flex items-center gap-x-2">
                <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                  <i class="uil uil-music text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-base font-medium text-gray-800">Top Tracks</h3>
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
                  <i class="fa-solid fa-user-astronaut text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-base font-medium text-gray-800">Top Artists</h3>
              </div>
            </CardTitleComponent>

            <ArtistsTablesComponent
              data={topArtist ? topArtist.slice(0, 15) : null}
            />
          </CardLayout>

          {/* Albums */}
          <CardLayout custom="col-span-1 md:col-span-2 xl:col-span-3 2xl:col-span-2">
            <CardTitleComponent>
              <div class="flex items-center gap-x-2">
                <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                  <i class="fa-solid fa-compact-disc text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-base font-medium text-gray-800">Top Albums</h3>
              </div>
            </CardTitleComponent>

            <AlbumsTableComponent
              data={topAlbums ? topAlbums.slice(0, 15) : null}
            />
          </CardLayout>

          {/* Genres */}
          <CardLayout custom="col-span-1 md:col-span-2 xl:col-span-3 2xl:col-span-2">
            <CardTitleComponent>
              <div class="flex items-center gap-x-2">
                <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                  <i class="fa-solid fa-guitar text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-base font-medium text-gray-800">Top Genres</h3>
              </div>
            </CardTitleComponent>
            {/*  */}
            <GenresTableComponent
              data={topGenres ? topGenres.slice(0, 15) : null}
              total={topGenres ? topGenres.length : null}
            />
          </CardLayout>
        </GridLayout>
      </section>
    </>
  );
}

export default DashboardScreen;
