import React, { useState, useEffect } from "react";

import { map, size } from "lodash";
import { getMoodTrack } from "@/utils/mood-meter.utils";
import MusicLoaderComponent from "../Loaders/MusicLoaderComponent";
import Link from "next/link";

function RecentlyPlayedTableComponent(props) {
  const { dataset, features, identifier, reload } = props;

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
  }, [dataset, reload]);

  if (!data && !features && !identifier) return null;

  //   console.log(dataset);

  const onReset = () => {
    const all = document.querySelectorAll(`audio.${identifier}`);

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
      //   const item = data[next - 1];
      console.log("Siguiente cancion");
      onSetPlayAudio(next);
      setCurrentSong(next);
    } else {
      console.log("finished playing");
    }
  };

  const onSetPlayAudio = (e) => {
    const all = document.querySelectorAll(`audio.${identifier}`);

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
      <section className="container pt-6">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 overflow-x-scroll">
                  <thead className="bg-gray-50 ">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        <div className="flex items-center gap-x-3">
                          <button className="flex items-center gap-x-2">
                            <span>#</span>
                          </button>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 pl-0 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        Song
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        Album
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        Mood
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {!data ? (
                      <></>
                    ) : (
                      <>
                        {size(data) == 0 ? (
                          <></>
                        ) : (
                          <>
                            <>
                              {data.map((item, index) => (
                                <>
                                  <tr>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                      <div className="inline-flex items-center gap-x-3">
                                        {index + 1 == currentSong ? (
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

                                    <td className="px-4 pl-0 py-4 text-sm text-gray-500 whitespace-nowrap">
                                      <div className="flex items-center gap-x-2">
                                        <div className="w-10 h-10 relative">
                                          <button
                                            className={
                                              index + 1 === currentSong
                                                ? !isPlay
                                                  ? "absolute z-20 left-0 top-0 w-10 h-10 flex items-center justify-center opacity-30 hover:opacity-100 transition ease-in-out "
                                                  : "absolute z-20 left-0 top-0 w-10 h-10 flex items-center justify-center opacity-100 hover:opacity-100 transition ease-in-out "
                                                : "absolute z-20 left-0 top-0 w-10 h-10 flex items-center justify-center opacity-30 hover:opacity-100 transition ease-in-out "
                                            }
                                            //   "absolute left-0 top-0 w-10 h-10 flex items-center justify-center opacity-20 hover:opacity-100 transition ease-in-out "
                                            onClick={() => {
                                              setCurrentSong(index + 1);
                                              onSetPlayAudio(index + 1);
                                            }}
                                            disabled={
                                              item.track.preview_url
                                                ? false
                                                : true
                                            }
                                          >
                                            {index + 1 === currentSong ? (
                                              <>
                                                {!isPlay ? (
                                                  <i className="bx bx-play-circle text-3xl text-white"></i>
                                                ) : (
                                                  <i className="bx bx-pause-circle text-3xl text-white"></i>
                                                )}
                                              </>
                                            ) : (
                                              <i className="bx bx-play-circle text-3xl text-white"></i>
                                            )}
                                          </button>
                                          <div className="hidden">
                                            <audio
                                              id={index + 1}
                                              className={`${
                                                identifier ? identifier : null
                                              } block w-full max-w-md mx-auto opacity-0 right-0 top-0`}
                                              controls
                                              style={{
                                                opacity: "0.5",
                                                height: "30px",
                                                width: "50px",
                                              }}
                                              onEnded={() => {
                                                onEnded(index + 2);
                                              }}
                                              src={
                                                item.track.preview_url
                                                  ? item.track.preview_url
                                                  : ""
                                              }
                                            />
                                          </div>
                                          <div className="absolute left-0 top-0 w-10 h-10 rounded bg-black opacity-10"></div>
                                          <img
                                            className="object-cover w-10 h-10 rounded"
                                            src={
                                              item.track.album
                                                ? item.track.album.images[0].url
                                                : ""
                                            }
                                            alt=""
                                          />
                                        </div>
                                        <div>
                                          <h2 className="text-sm font-medium text-gray-800 hover:text-esmerald_btn_normal_500">
                                            <Link
                                              href={`/app/tracks/${item.track.id}`}
                                            >
                                              {item.track.name
                                                ? item.track.name
                                                : ""}
                                            </Link>
                                          </h2>
                                          <p className="text-xs font-normal text-gray-600 line-clamp-1">
                                            {size(item.track.artists) == 0 ? (
                                              <>N/A</>
                                            ) : (
                                              item.track.artists.map(
                                                (artist, indx) => (
                                                  <>
                                                    {indx == 0 ? (
                                                      <>{artist.name}</>
                                                    ) : (
                                                      <>, {artist.name}</>
                                                    )}
                                                  </>
                                                )
                                              )
                                            )}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500">
                                      <p className="line-clamp-2">
                                        {item.track.album
                                          ? item.track.album.name
                                          : ""}
                                      </p>
                                    </td>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap flex">
                                      <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 ">
                                        <h2 className="text-sm font-normal">
                                          {features ? (
                                            <>
                                              {
                                                getMoodTrack(
                                                  features.audio_features[index]
                                                    .energy,
                                                  features.audio_features[index]
                                                    .valence
                                                ).emotion
                                              }
                                            </>
                                          ) : (
                                            ""
                                          )}
                                        </h2>
                                      </div>
                                    </td>
                                  </tr>
                                </>
                              ))}
                            </>
                          </>
                        )}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {!data ? <></> : <>{size(data) == 0 ? <></> : <></>}</>} */}
    </>
  );
}

export default RecentlyPlayedTableComponent;
