import React, { useState, useEffect } from "react";

import useAuth from "@/hooks/useAuth";

import CardLayout from "@/layouts/CardLayout";
import BreadrumsTitleComponent from "@/components/Titles/BreadrumsTitleComponent";
import SongsTableComponent from "@/components/Tables/SongsTableComponent";
import { getMyFullTop, getTracksAudioFeatures } from "@/api/user.api";
import {
  getRecentlyAudioFeatures,
  getRecentlyPlayedTracks,
} from "@/api/tracks.api";
import RecentlyPlayedTableComponent from "@/components/Tables/RecentlyPlayedTableComponent";

function TracksScreen() {
  const [topTracks, setTopTracks] = useState(null);
  const [audioFeatures, setAudioFeatures] = useState(null);

  const [recentlyPlayed, setRecentlyPlayed] = useState(null);
  const [recentlyAudioFeatures, setRecentlyAudioFeatures] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [timeRange, setTimeRange] = useState({
    name: "Last 4 Weeks",
    value: "short_term",
  });

  const { auth, data_user, logout } = useAuth();

  useEffect(() => {
    (async () => {
      if (data_user && timeRange) {
        onSetTracksData(logout, timeRange.value);
      }
    })();
  }, [data_user, timeRange]);

  useEffect(() => {
    (async () => {
      if (data_user) {
        onSetRecentlyPlayedTracks(logout);
      }
    })();
  }, [data_user]);

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

  const onSetRecentlyPlayedTracks = async (logout) => {
    try {
      const result = await getRecentlyPlayedTracks(logout);
      if (result) {
        setRecentlyPlayed(result);

        const audio_features = await getRecentlyAudioFeatures(logout, result);
        if (audio_features) {
          setRecentlyAudioFeatures(audio_features);
        }
      }
    } catch (error) {
      console.log("onSetRecentlyPlayedTracks:", error);
    }
  };

  return (
    <>
      <section className="m-6 xl:mx-10">
        <BreadrumsTitleComponent title={"Tracks"} />

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

        <CardLayout>
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
                  <i class="uil uil-music mr-2 text-lg"></i>
                  Top 99
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
                  <i class="uil uil-sync mr-2 text-lg"></i>
                  Recently Played
                </button>
              </li>
            </ul>
          </div>

          {/*  */}
          <div className={tab == 0 ? "" : "hidden"}>
            <SongsTableComponent
              data={topTracks}
              features={audioFeatures}
              identifier={"top__tracks"}
              reload={tab}
            />
          </div>

          <div className={tab == 1 ? "" : "hidden"}>
            <RecentlyPlayedTableComponent
              dataset={recentlyPlayed}
              features={recentlyAudioFeatures}
              identifier={"recentrly_tracks"}
              reload={tab}
            />
          </div>
        </CardLayout>
      </section>
    </>
  );
}

export default TracksScreen;
