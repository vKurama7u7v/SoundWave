import React, { useState, useEffect } from "react";
import { map, size } from "lodash";
import MusicLoaderComponent from "@/components/Loaders/MusicLoaderComponent";

function PlayerWidget(props) {
  const { data: dataset, image } = props;

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [track, setTrack] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (dataset) {
      setData(dataset);

      if (data) {
        onReset();
      }
    }
  }, [dataset]);

  useEffect(() => {
    if (dataset) {
      setTrack(getCurrentSong(currentSong));
    }
  }, [currentSong]);

  if (!data) return null;

  const onReset = () => {
    const all = document.querySelectorAll("audio");

    all.forEach((audio) => {
      if (parseInt(audio.getAttribute("id"))) {
        stopSound(audio);
      }
    });

    setIsPlaying(false);
    setCurrentSong(null);
  };

  // Play audio sound
  const playSound = (audio) => {
    audio.play();
    setIsPlaying(true);
  };

  // Pause audio sound
  const pauseSound = (audio) => {
    audio.pause();
    setIsPlaying(false);
    setCurrentSong(null);
  };

  // Stop audio sound
  const stopSound = (audio) => {
    audio.pause();
    audio.currentTime = 0;
  };

  const onEnded = (next) => {
    setIsPlaying(false);

    if (next <= data.length) {
      const item = data[next - 1];
      console.log("Siguiente cancion");
      onSetPlayAudio(item.id);
      setCurrentSong(item.id);
    } else {
      setCurrentSong(null);
      console.log("finished playing");
    }
  };

  const onSetPlayAudio = (e) => {
    const all = document.querySelectorAll("audio");

    all.forEach((audio) => {
      if (parseInt(audio.getAttribute("id")) !== e) {
        stopSound(audio);
      }
    });

    let element;

    if (e === currentSong) {
      element = document.getElementById(currentSong);
      if (!isPlaying) {
        playSound(element);
      } else {
        pauseSound(element);
      }
    } else {
      element = document.getElementById(e);
      playSound(element);
    }
  };

  const getCurrentSong = (id) => {
    if (dataset && id) {
      const result = dataset.filter(function (item) {
        if (item.id === id) {
          return item;
        }
      });

      return result;
    }
    return null;
  };

  return (
    <>
      <div className="music-player-component--widget shadow rounded p-4">
        <div className="music-player-component--wrapper">
          <div className="music-player-component--left">
            <div
              className={`music-player-component--icon relative ${
                isPlaying ? "active" : ""
              }`}
            >
              <span class="loader"></span>
              <span className="note-particle">
                <i class="fa-solid fa-music"></i>
              </span>
              <span className="note-particle">
                <i class="fa-solid fa-music"></i>
              </span>
              <span className="note-particle">
                <i class="fa-solid fa-music"></i>
              </span>
              <IconMediaPlayer />
            </div>

            <div className="bottom">
              <div className="info pb-2">
                <p className="">{currentSong ? "" : null}</p>
                <h2 className="text-sm font-medium text-gray-600 line-clamp-2 pr-4 w-48 leading-4">
                  {track ? track[0].name : ""}
                </h2>
                <p className="text-xs font-medium text-gray-500 line-clamp-1 pr-4 w-48">
                  {track ? (
                    <>
                      {size(track[0].artists) == 0 ? (
                        <>N/A</>
                      ) : (
                        track[0].artists.map((artist, index) => (
                          <>
                            {index == 0 ? (
                              <>{artist.name}</>
                            ) : (
                              <>, {artist.name}</>
                            )}
                          </>
                        ))
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </p>
                <p className="text-xs font-medium text-gray-400">
                  {dataset ? dataset.length : 0} Tracks
                </p>
              </div>

              <button
                className="music-player-component--button text-sm font-medium text-white"
                onClick={() => {
                  setCurrentSong(currentSong ? currentSong : data[0].id);
                  onSetPlayAudio(currentSong ? currentSong : data[0].id);
                }}
              >
                <div className="left">
                  <i class={isPlaying ? "bx bx-pause" : "bx bx-play"}></i>
                </div>

                <div className="right text-xs font-semibold">
                  {isPlaying ? "Pause" : "Play"}
                </div>
              </button>
            </div>
          </div>
          <div
            className={`music-player-component--right ${
              isPlaying ? "active" : ""
            }`}
          >
            <Portrait
              img={track ? track[0].album.images[0].url : image}
              //   img="https://creatorspace.imgix.net/richdata/spotify/playlists/aHR0cHM6Ly9pbWFnZS1jZG4tYWsuc3BvdGlmeWNkbi5jb20vaW1hZ2UvYWI2NzcwNmMwMDAwYmViYjI2Y2E2MmZhNDdmZTBlYzI0NTJhYmZjOA==.jpeg?h=127"
              title={track ? track[0].name : ""}
              alt={track ? track[0].name : ""}
            />
            <Disk />
          </div>
        </div>
      </div>

      <section className="music-player-component--list mt-4">
        <div className="wrapper w-full flex flex-col gap-1 overflow-y-scroll h-[250px]">
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
                      <div
                        className={`item w-full bg-gray-50 p-4 flex rounded ${
                          item.id === currentSong
                            ? "bg-[#4ECC48]"
                            : "bg-gray-50"
                        }`}
                      >
                        <div className="flex justify-between items-center w-full">
                          <div class="flex items-center gap-x-2">
                            <div className="w-10 h-10 relative">
                              <button
                                className={
                                  item.id === currentSong
                                    ? !isPlaying
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
                                    {!isPlaying ? (
                                      <i class="bx bx-play-circle text-3xl text-white"></i>
                                    ) : (
                                      <i class="bx bx-pause-circle text-3xl text-white"></i>
                                    )}
                                  </>
                                ) : (
                                  <i class="bx bx-play-circle text-3xl text-white"></i>
                                )}
                              </button>

                              <div className="absolute left-0 top-0 w-10 h-10 rounded bg-black opacity-0"></div>

                              <img
                                class="object-cover w-10 h-10 rounded"
                                src={item.album ? item.album.images[0].url : ""}
                                alt={item.name ? item.name : ""}
                              />

                              <div className="flex items-center hidden">
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
                            </div>
                            <div className="w-60">
                              <h2
                                class={`text-sm font-medium line-clamp-1 ${
                                  item.id === currentSong
                                    ? "text-gray-700"
                                    : "text-gray-800"
                                }`}
                              >
                                {item.name ? item.name : ""}
                              </h2>
                              <p class="text-xs font-normal text-gray-600">
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
                            </div>
                          </div>

                          <div className="flex justify-center items-center w-10 h-10 ">
                            {item.id === currentSong ? (
                              <MusicLoaderComponent color={"#2e2e2e"} />
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

function Portrait({ img, title, alt }) {
  return (
    <>
      <div className="music-player-component--portrait rounded-lg">
        <img src={img} alt={alt} title={title} />
      </div>
    </>
  );
}

function IconMediaPlayer() {
  return (
    <>
      <div className="music-player-component--icon-spotify relative">
        <svg
          width="16"
          height="16"
          class="h-full w-full"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="10" fill="#1ED760"></rect>
          <path
            d="M19.9999 8C13.3727 8 8 13.3727 8 20.0001C8 26.6278 13.3727 32 19.9999 32C26.6279 32 32 26.6278 32 20.0001C32 13.3731 26.6279 8.00057 19.9998 8.00057L19.9999 8ZM25.503 25.3075C25.2881 25.6601 24.8267 25.7718 24.4742 25.5555C21.6567 23.8344 18.1099 23.4447 13.9328 24.399C13.5303 24.4907 13.1291 24.2385 13.0374 23.8359C12.9452 23.4332 13.1964 23.032 13.6 22.9403C18.1711 21.8959 22.092 22.3456 25.2551 24.2787C25.6076 24.495 25.7194 24.955 25.503 25.3075ZM26.9718 22.0401C26.701 22.4803 26.1249 22.6193 25.685 22.3484C22.4594 20.3658 17.5426 19.7916 13.7273 20.9497C13.2325 21.0992 12.71 20.8203 12.5598 20.3264C12.4108 19.8316 12.6897 19.3099 13.1837 19.1595C17.5417 17.8371 22.9595 18.4777 26.6637 20.754C27.1036 21.0248 27.2426 21.6007 26.9718 22.0401ZM27.0979 18.6376C23.2304 16.3404 16.8495 16.1292 13.1569 17.2499C12.5639 17.4297 11.9369 17.095 11.7572 16.502C11.5775 15.9088 11.9119 15.2821 12.5053 15.1019C16.7441 13.815 23.7906 14.0637 28.2434 16.7071C28.7779 17.0236 28.9527 17.7125 28.636 18.2451C28.3208 18.7785 27.6301 18.9543 27.0985 18.6376H27.0979Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </>
  );
}

function Disk() {
  return (
    <>
      <div className="music-player-component--disk z-10 active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="101.60000000000001"
          height="101.60000000000001"
          fill="none"
          viewBox="0 0 110 110"
          className="max-h-full max-w-full"
        >
          <circle cx={55} cy={55} r={55} fill="#000" />
          <mask
            id="mask0_6138_16576"
            style={{ maskType: "alpha" }}
            width={110}
            height={110}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
          >
            <circle cx={55} cy={55} r={55} fill="#000" />
          </mask>
          <g mask="url(#mask0_6138_16576)">
            <g filter="url(#filter0_f_6138_16576)">
              <circle
                cx={55}
                cy={55}
                r="51.5"
                stroke="#fff"
                strokeOpacity="0.21"
              />
            </g>
            <g filter="url(#filter1_f_6138_16576)">
              <circle
                cx={55}
                cy={55}
                r="47.5"
                stroke="#fff"
                strokeOpacity="0.21"
              />
            </g>
            <g filter="url(#filter2_f_6138_16576)">
              <circle
                cx={55}
                cy={55}
                r="45.5"
                stroke="#fff"
                strokeOpacity="0.21"
              />
            </g>
            <g filter="url(#filter3_f_6138_16576)">
              <circle
                cx={55}
                cy={55}
                r="43.5"
                stroke="#fff"
                strokeOpacity="0.21"
              />
            </g>
            <g filter="url(#filter4_f_6138_16576)">
              <circle
                cx={55}
                cy={55}
                r="37.5"
                stroke="#fff"
                strokeOpacity="0.21"
              />
            </g>
            <g filter="url(#filter5_f_6138_16576)">
              <circle
                cx={55}
                cy={55}
                r="34.5"
                stroke="#fff"
                strokeOpacity="0.21"
              />
            </g>
            <g filter="url(#filter6_f_6138_16576)" opacity="0.4">
              <path fill="#fff" d="M-14 38l68 19.579L-14 74V38z" />
            </g>
            <g filter="url(#filter7_f_6138_16576)" opacity="0.4">
              <path fill="#fff" d="M123 38L55 57.579 123 74V38z" />
            </g>
            <g filter="url(#filter8_f_6138_16576)" opacity="0.4">
              <path fill="#fff" d="M36.5 124.5l19.579-68 16.421 68h-36z" />
            </g>
            <g filter="url(#filter9_f_6138_16576)" opacity="0.4">
              <path fill="#fff" d="M36.5-12.5l19.579 68 16.421-68h-36z" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_6138_16576"
              width={108}
              height={108}
              x={1}
              y={1}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_6138_16576"
                stdDeviation={1}
              />
            </filter>
            <filter
              id="filter1_f_6138_16576"
              width={100}
              height={100}
              x={5}
              y={5}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_6138_16576"
                stdDeviation={1}
              />
            </filter>
            <filter
              id="filter2_f_6138_16576"
              width={96}
              height={96}
              x={7}
              y={7}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_6138_16576"
                stdDeviation={1}
              />
            </filter>
            <filter
              id="filter3_f_6138_16576"
              width={92}
              height={92}
              x={9}
              y={9}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_6138_16576"
                stdDeviation={1}
              />
            </filter>
            <filter
              id="filter4_f_6138_16576"
              width={80}
              height={80}
              x={15}
              y={15}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_6138_16576"
                stdDeviation={1}
              />
            </filter>
            <filter
              id="filter5_f_6138_16576"
              width={74}
              height={74}
              x={18}
              y={18}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_6138_16576"
                stdDeviation={1}
              />
            </filter>
            <filter
              id="filter6_f_6138_16576"
              width={100}
              height={68}
              x={-30}
              y={22}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_6138_16576"
                stdDeviation={8}
              />
            </filter>
            <filter
              id="filter7_f_6138_16576"
              width={100}
              height={68}
              x={39}
              y={22}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_6138_16576"
                stdDeviation={8}
              />
            </filter>
            <filter
              id="filter8_f_6138_16576"
              width={68}
              height={100}
              x="20.5"
              y="40.5"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_6138_16576"
                stdDeviation={8}
              />
            </filter>
            <filter
              id="filter9_f_6138_16576"
              width={68}
              height={100}
              x="20.5"
              y="-28.5"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_6138_16576"
                stdDeviation={8}
              />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}

export default PlayerWidget;
