import React, { useState, useEffect } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { getTrackAudioFeaturesByID, getTrackByID } from "@/api/tracks.api";
import { getMoodTrack } from "@/utils/mood-meter.utils";

import useAuth from "@/hooks/useAuth";
import CardLayout from "@/layouts/CardLayout";
import DetailsTracksSection from "@/sections/Tracks/DetailsTracksSection";
import CardTitleComponent from "@/components/Titles/CardTitleComponent";
import BarComponent from "@/components/ChartJS/BarComponent";
import ImageMoodComponent from "@/components/Images/ImageMoodComponent";
import {
  getSongDetailsGenius,
  getSongLyricsGenius,
  searchTrackGenius,
} from "@/api/genius.api";

ChartJS.register(...registerables);

const TrackByIdScreen = (props) => {
  const { track_id } = props;

  const [track, setTrack] = useState(null);
  const [stats, setStats] = useState(null);
  const [mood, setMood] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const [details, setDetails] = useState(null);
  const [lyrics, setLyrics] = useState(null);
  const [searchGenius, setSearchGenius] = useState(null);

  const [search, setSearch] = useState(track_id);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [tab, setTab] = useState(0);

  const { auth, data_user, logout } = useAuth();

  useEffect(() => {
    if (!search) setSearch(track_id);
  }, [data_user]);

  useEffect(() => {
    (async () => {
      if (data_user && search) {
        onSetTrackData(logout, track_id);
      }
    })();
  }, [search]);

  if (!search) return null;

  const onSetTrackData = async (logout, id) => {
    try {
      const res = await getTrackByID(logout, id);

      console.log(res);
      if (!res.error) {
        setTrack(res);

        const audio_features = await getTrackAudioFeaturesByID(logout, res.id);

        if (audio_features) {
          setStats(onSetStats(audio_features));
          setMood(onSetMood(audio_features));
          setAnalysis(audio_features);
        }

        // // Genius
        // const res_genius = await searchTrackGenius(
        //   logout,
        //   `${res.name} ${res.artists[0].name}`
        // );

        // const { hits } = res_genius;
        // const search_genius = onSetSearchGenius(hits, res.name);

        // if (search_genius) {
        //   const res_lyrics = await getSongLyricsGenius(
        //     logout,
        //     search_genius.id
        //   );

        //   const res_details = await getSongDetailsGenius(
        //     logout,
        //     search_genius.id
        //   );

        //   console.log({ a: res_lyrics, b: res_details });
        //   if (res_lyrics) {
        //     setLyrics(res_lyrics);
        //   }

        //   if (res_details) {
        //     setDetails(res_details);
        //   }
        // }
      } else {
        setError(true);
      }

      setLoading(false);
    } catch (error) {
      console.log("onSetTrackData:", error);
      setTrack(null);
    }
  };

  const onSetStats = (data) => {
    if (data) {
      let labels = [
        "Danceability",
        "Energy",
        "Acousticness",
        "Speechiness",
        "Instrumentalness",
        "Liveness",
        "Valence",
      ];

      let values = [
        data.danceability,
        data.energy,
        data.acousticness,
        data.speechiness,
        data.instrumentalness,
        data.liveness,
        data.valence,
      ];

      return { labels, values };
    }

    return null;
  };

  const onSetMood = (data) => {
    if (data) {
      const output = getMoodTrack(data.energy, data.valence);

      if (output) return output;
    }

    return null;
  };

  const onSetSearchGenius = (data, find) => {
    if (data.length > 0) {
      if (
        data[0].result.full_title.toLowerCase().includes(find.toLowerCase())
      ) {
        return data[0].result;
      }
    }

    return null;
  };

  if (loading) return null;
  if (error) return null;

  return (
    <>
      <section className="m-4 xl:m-4 xl:mr-3 xl:ml-6">
        {/* m-6 xl:mx-10 */}
        <div className="bg-white pb-0 rounded-lg px-3 pt-3">
          <DetailsTracksSection data={track ? track : null} />
          {/*  */}
          <div class="border-b border-gray-200 mb-6">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 ">
              <li class="me-2">
                <button
                  class={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group ${
                    tab == 0
                      ? "text-esmerald-500 border-esmerald-500 active"
                      : "hover:text-gray-600 hover:border-gray-300 border-transparent"
                  }`}
                  onClick={() => setTab(0)}
                >
                  <i class="uil uil-apps mr-2 text-lg"></i>
                  Overview
                </button>
              </li>

              <li class="me-2">
                <button
                  class={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group ${
                    tab == 1
                      ? "text-esmerald-500 border-esmerald-500 active"
                      : "hover:text-gray-600 hover:border-gray-300 border-transparent"
                  }`}
                  onClick={() => setTab(1)}
                >
                  <i class="uil uil-music-note mr-2 text-lg"></i>
                  Lyrics
                </button>
              </li>
            </ul>
          </div>
        </div>

        <section className={tab == 0 ? "" : "hidden"}>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-2 xl:gap-6 xl:grid-cols-3">
            <CardLayout>
              <CardTitleComponent>
                <div class="flex items-center gap-x-2">
                  <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                    <i class="uil uil-analysis text-esmerald-500 text-2xl"></i>
                  </div>
                  <h3 class="text-base font-medium text-gray-800">Análisis</h3>
                </div>
              </CardTitleComponent>
            </CardLayout>

            <CardLayout>
              <CardTitleComponent>
                <div class="flex items-center gap-x-2">
                  <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                    <i class="uil uil-chart-bar text-esmerald-500 text-2xl"></i>
                  </div>
                  <h3 class="text-base font-medium text-gray-800">
                    Estadisticas
                  </h3>
                </div>
              </CardTitleComponent>

              <BarComponent
                dataset={stats ? stats : null}
                label={"Value"}
                display={false}
              />
            </CardLayout>

            <CardLayout>
              <ImageMoodComponent mood={mood ? mood : null} />
            </CardLayout>
          </div>
        </section>

        {!lyrics ? null : lyrics.lyrics ? (
          <>
            <section className={tab == 1 ? "" : "hidden"}>
              <CardLayout>
                <div
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: lyrics.lyrics.lyrics.body.html,
                  }}
                ></div>
              </CardLayout>
            </section>
          </>
        ) : null}
      </section>
    </>
  );
};

export default TrackByIdScreen;
