import React, { useState, useEffect } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { getTrackAudioFeaturesByID, getTrackByID } from "@/api/tracks.api";
import {
  getBPM,
  getDanceability,
  getEnergy,
  getKey,
  getMode,
  getMoodTrack,
  getTimeSignature,
  getValence,
} from "@/utils/mood-meter.utils";

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

import Script from "next/script";
import { size } from "lodash";
import ChartTooltipComponent from "@/components/Tooltips/ChartTooltipComponent";
import SimpleTooltipComponent from "@/components/Tooltips/SimpleTooltipComponent";
import { msToString } from "@/utils/tools.utils";

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

      if (!res.error) {
        setTrack(res);

        const audio_features = await getTrackAudioFeaturesByID(logout, res.id);

        if (audio_features) {
          setStats(onSetStats(audio_features));
          setMood(onSetMood(audio_features));
          setAnalysis(audio_features);
        }

        const { artists, name: title } = res;

        // Genius
        const res_genius = await searchTrackGenius(logout, {
          title: title ? title : null,
          artist: artists && artists.length > 0 ? artists[0].name : null,
        });

        if (res_genius) {
          const res_lyrics = await getSongLyricsGenius(logout, res_genius.id);

          const { response } = res_lyrics;

          if (response) {
            setLyrics(response.song);
          }
        }
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
      const output = getMoodTrack(
        data.energy ? data.energy : 0,
        data.valence ? data.valence : 0
      );

      if (output) return output;
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
          <DetailsTracksSection
            data={track ? track : null}
            lyrics_url={lyrics ? lyrics.url : null}
          />
          {/*  */}
          <div class="border-b border-gray-200 ">
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

        <section
          className={tab == 0 ? "my-6 grid gap-4 xl:gap-6" : "hidden my-6"}
        >
          <div className="grid grid-cols-3 gap-4 md:grid-cols-2 xl:gap-6 xl:grid-cols-3">
            <CardLayout>
              <CardTitleComponent>
                <div class="flex items-center gap-x-2">
                  <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                    <i class="uil uil-analysis text-esmerald-500 text-2xl"></i>
                  </div>
                  <h3 class="text-base font-medium text-gray-800">Resumen</h3>
                </div>
              </CardTitleComponent>

              <div className="flex gap-3 items-center">
                <div className="flex gap-3">
                  <div className="grid gap-6">
                    <ChartTooltipComponent
                      title={"Danceability 💃"}
                      value={stats ? stats.values[0] : null}
                      tooltip={stats ? getDanceability(stats.values[0]) : null}
                      small={false}
                      primaryColor={"bg-violet-500"}
                      tooltipColor={""}
                      svgColor={""}
                    />

                    <ChartTooltipComponent
                      title={"Energy 🔋"}
                      value={stats ? stats.values[1] : null}
                      tooltip={
                        stats ? "Energía " + getEnergy(stats.values[1]) : null
                      }
                      small={false}
                      primaryColor={"bg-amber-400"}
                      tooltipColor={""}
                      svgColor={""}
                    />
                  </div>

                  <div className="grid gap-6">
                    <ChartTooltipComponent
                      title={"Valence 😃"}
                      value={stats ? stats.values[6] : null}
                      tooltip={stats ? getValence(stats.values[6]) : null}
                      small={false}
                      primaryColor={"bg-cyan-500"}
                      tooltipColor={""}
                      svgColor={""}
                    />

                    <ChartTooltipComponent
                      title={"Popularity ⭐"}
                      value={track ? track.popularity / 100 : null}
                      tooltip={null}
                      small={false}
                      primaryColor={""}
                      tooltipColor={""}
                      svgColor={""}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <div className="flex gap-3">
                    <SimpleTooltipComponent
                      icon={""}
                      title={"Key"}
                      value={analysis ? getKey(analysis.key).key : null}
                      tooltip={analysis ? getKey(analysis.key).text : null}
                      tooltipColor={""}
                      svgColor={""}
                    />
                    <SimpleTooltipComponent
                      icon={"uil uil-volume"}
                      title={"Mode"}
                      value={analysis ? getMode(analysis.mode) : null}
                      tooltip={""}
                      tooltipColor={""}
                      svgColor={""}
                    />
                  </div>
                  <SimpleTooltipComponent
                    icon={"fa-solid fa-sliders text-sm"}
                    title={"Time Signature"}
                    value={
                      analysis
                        ? getTimeSignature(analysis.time_signature)
                        : null
                    }
                    tooltip={
                      "Número de pulsos por compás / Duración de cada pulso"
                    }
                    tooltipColor={""}
                    svgColor={""}
                  />
                  <SimpleTooltipComponent
                    icon={"uil uil-heart-rate"}
                    title={"BPM"}
                    value={analysis ? getBPM(analysis.tempo) : null}
                    tooltip={
                      analysis
                        ? `${getBPM(analysis.tempo)} Beats por Minuto`
                        : null
                    }
                    tooltipColor={""}
                    svgColor={""}
                  />
                  <SimpleTooltipComponent
                    icon={"uil uil-clock"}
                    title={"Duration"}
                    value={analysis ? msToString(analysis.duration_ms) : null}
                    tooltip={""}
                    tooltipColor={""}
                    svgColor={""}
                  />
                </div>
              </div>
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

          <CardLayout>
            <CardTitleComponent>
              <div class="flex items-center gap-x-2">
                <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                  <i class="uil uil-analysis text-esmerald-500 text-2xl"></i>
                </div>
                <h3 class="text-2xl font-extrabold text-gray-800">
                  Descripción
                </h3>
              </div>
            </CardTitleComponent>
            <p className="text-gray-600 text-justify" translate="es">
              {lyrics ? lyrics.description.plain : null}
            </p>
          </CardLayout>

          <div className="grid grid-cols-3 gap-4 md:grid-cols-2 xl:gap-6 xl:grid-cols-3">
            {!lyrics
              ? null
              : size(lyrics.media) > 0
              ? lyrics.media.map((item) => (
                  <>
                    {item.type == "video" ? (
                      <CardLayout>
                        <CardTitleComponent>
                          <div class="flex items-center gap-x-2">
                            <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
                              <i class="uil uil uil-youtube text-esmerald-500 text-2xl"></i>
                            </div>
                            <h3 class="text-base font-medium text-gray-800">
                              Media
                            </h3>
                          </div>
                        </CardTitleComponent>

                        <iframe
                          width="100%"
                          height="250"
                          src={`https://www.youtube.com/embed/${
                            item.url.split("watch?v=", 2)[1]
                          }?si=tf3JuRoI3oq7PU4y`}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </CardLayout>
                    ) : null}
                  </>
                ))
              : null}
          </div>
        </section>

        {!lyrics ? null : lyrics.embed_content ? (
          <>
            <section className={tab == 1 ? "my-6" : "hidden my-6"}>
              <CardLayout>
                <div
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: lyrics.embed_content,
                  }}
                ></div>
                {lyrics.embed_content}
              </CardLayout>
            </section>
          </>
        ) : null}
      </section>
    </>
  );
};

export default TrackByIdScreen;
