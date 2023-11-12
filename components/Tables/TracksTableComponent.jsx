import React, { useState, useEffect } from "react";

import { map, size } from "lodash";
import { getMoodTrack } from "@/utils/mood-meter.utils";
import MusicLoaderComponent from "../Loaders/MusicLoaderComponent";

function TracksTableComponent(props) {
  const { data: dataset, features } = props;

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlay, setIsPlay] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (dataset) {
      setData(dataset);

      if (data) {
        onReset();
      }
    }
  }, [dataset]);

  if (!data) return null;

  const onReset = () => {
    const all = document.querySelectorAll("audio");

    all.forEach((audio) => {
      if (parseInt(audio.getAttribute("id"))) {
        stopSound(audio);
      }
    });

    setIsPlay(false);
    setCurrentSong(null);
  };

  // Play audio sound
  const playSound = (audio) => {
    audio.play();
    setIsPlay(true);
  };

  // Pause audio sound
  const pauseSound = (audio) => {
    audio.pause();
    setIsPlay(false);
  };

  // Stop audio sound
  const stopSound = (audio) => {
    audio.pause();
    audio.currentTime = 0;
  };

  const onEnded = (next) => {
    setIsPlay(false);

    if (next <= data.length) {
      const item = data[next - 1];
      console.log("Siguiente cancion");
      onSetPlayAudio(item.id);
      setCurrentSong(item.id);
    } else {
      console.log("finished playing");
    }
  };

  const onSetPlayAudio = (e) => {
    console.log(currentSong, e);
    const all = document.querySelectorAll("audio");

    all.forEach((audio) => {
      if (parseInt(audio.getAttribute("id")) !== e) {
        stopSound(audio);
      }
    });

    let element;

    if (e === currentSong) {
      element = document.getElementById(currentSong);
      if (!isPlay) {
        playSound(element);
      } else {
        pauseSound(element);
      }
    } else {
      element = document.getElementById(e);
      playSound(element);
    }
  };

  return (
    <>
      <div class="relative overflow-x-auto sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200 overflow-x-scroll">
          <thead class="bg-gray-50 ">
            <tr>
              <th
                scope="col"
                class="py-3.5 px-4 text-sm font-bold text-left rtl:text-right text-gray-500 "
              >
                #
              </th>

              <th
                scope="col"
                class="px-4 pl-0 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Song
              </th>

              <th
                scope="col"
                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Album
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200 ">
            {!data ? (
              <></>
            ) : (
              <>
                {size(data) == 0 ? (
                  <></>
                ) : (
                  <>
                    {data.map((item, index) => (
                      <>
                        <tr>
                          <td class="px-4 py-4 text-sm font-bold text-gray-500 whitespace-nowrap">
                            <div class="inline-flex items-center gap-x-3">
                              {item.id == currentSong ? (
                                <>
                                  {isPlay ? (
                                    <div className="flex justify-center items-center w-1 h-1">
                                      <MusicLoaderComponent />
                                    </div>
                                  ) : (
                                    <span>{index + 1}</span>
                                  )}
                                </>
                              ) : (
                                <span>{index + 1}</span>
                              )}
                            </div>
                          </td>

                          <td class="px-4 pl-0 py-4 text-sm text-gray-500">
                            <div class="flex items-center gap-x-2">
                              <div className="w-10 h-10 relative">
                                <button
                                  className={
                                    item.id === currentSong
                                      ? !isPlay
                                        ? "absolute z-20 left-0 top-0 w-10 h-10 flex items-center justify-center opacity-30 hover:opacity-100 transition ease-in-out "
                                        : "absolute z-20 left-0 top-0 w-10 h-10 flex items-center justify-center opacity-100 hover:opacity-100 transition ease-in-out "
                                      : "absolute z-20 left-0 top-0 w-10 h-10 flex items-center justify-center opacity-30 hover:opacity-100 transition ease-in-out "
                                  }
                                  //   "absolute left-0 top-0 w-10 h-10 flex items-center justify-center opacity-20 hover:opacity-100 transition ease-in-out "
                                  onClick={() => {
                                    setCurrentSong(item.id);
                                    onSetPlayAudio(item.id);
                                  }}
                                >
                                  {item.id === currentSong ? (
                                    <>
                                      {!isPlay ? (
                                        <i class="bx bx-play-circle text-3xl text-white"></i>
                                      ) : (
                                        <i class="bx bx-pause-circle text-3xl text-white"></i>
                                      )}
                                    </>
                                  ) : (
                                    <i class="bx bx-play-circle text-3xl text-white"></i>
                                  )}
                                </button>

                                <div className="absolute left-0 top-0 w-10 h-10 rounded bg-black opacity-10"></div>
                                <img
                                  class="object-cover w-10 h-10 rounded min-w-10"
                                  src={
                                    item.album ? item.album.images[0].url : ""
                                  }
                                  alt={item.name ? item.name : ""}
                                />
                              </div>
                              <div>
                                <h2 class="text-sm font-medium text-gray-800">
                                  {item.name ? item.name : ""}
                                </h2>
                                <p class="text-xs font-normal text-gray-600 ">
                                  <p class="text-xs font-normal text-gray-600 ">
                                    {size(item.artists) == 0 ? (
                                      <>N/A</>
                                    ) : (
                                      item.artists.map((artist, index) => (
                                        <>
                                          {index == 0 ? (
                                            <>{artist.name}</>
                                          ) : (
                                            <>, {artist.name}</>
                                          )}
                                        </>
                                      ))
                                    )}
                                  </p>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-4 py-4 max-w-[20em] text-sm text-gray-500 relative">
                            {item.album ? item.album.name : ""}
                          </td>

                          {/* AUDIO */}
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap relative hidden">
                            <div className="flex items-center">
                              <audio
                                id={item.id ? item.id : ""}
                                class="block w-full max-w-md mx-auto opacity-0 absolute right-0 top-0"
                                controls
                                style={{
                                  opacity: "0.5",
                                  height: "30px",
                                  width: "50px",
                                }}
                                onEnded={() => {
                                  onEnded(index + 2);
                                }}
                                src={item.preview_url ? item.preview_url : ""}
                              />
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                  </>
                )}
              </>
            )}
            {/* {!data ? <></> : <>{size(data) == 0 ? <></> : <></>}</>} */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TracksTableComponent;
