import React, { useState, useEffect } from "react";
import { size } from "lodash";

function DetailsTracksSection(props) {
  const { data, lyrics_url } = props;

  const [isPlay, setIsPlay] = useState(false);

  if (!data) return null;

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

  const onEnded = () => {
    setIsPlay(false);
  };

  const onSetPlayAudio = (e) => {
    const element = document.getElementById(e);
    if (!isPlay) {
      playSound(element);
    } else {
      pauseSound(element);
    }
  };

  console.log(data);

  return (
    <>
      <div className="flex p-6 justify-between gap-12">
        <div className="left  w-full flex flex-col justify-between">
          <div
            className={`music-player-component--icon relative ${
              isPlay ? "active" : ""
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
            <div className="details pb-2 pt-2">
              <h2 className="text-lg font-semibold text-slate-600 line-clamp-1">
                {data
                  ? size(data.artists) > 0
                    ? data.artists.map((item, index) =>
                        index == 0 ? <>{item.name}</> : <>, {item.name}</>
                      )
                    : ""
                  : ""}
              </h2>
              <h1 className="text-5xl font-bold text-slate-800 line-clamp-1 leading-[130%]">
                {data ? data.name : ""}
              </h1>
            </div>
            <div className="buttons flex gap-4">
              <a
                href={data ? data.external_urls.spotify : "#"}
                target="_blank"
                type="button"
                class=" flex gap-2 rounded-full border border-slate-600 bg-transparent p-1 px-[0.30rem] pr-2 text-center text-xs font-medium text-slate-600 shadow-sm transition-all hover:text-white hover:border-esmerald_btn_normal_500 hover:bg-esmerald_btn_normal_500 disabled:cursor-not-allowed disabled:border-esmerald-300"
              >
                <i class="fa-brands fa-spotify text-lg"></i>
                <span className="font-semibold text-xs">Open in Spotify</span>
              </a>
              {lyrics_url ? (
                <a
                  href={lyrics_url ? lyrics_url : "#"}
                  target="_blank"
                  type="button"
                  class=" flex gap-2 rounded-full border border-slate-600 bg-transparent p-1 px-[0.30rem] pr-2 text-center text-xs font-medium text-slate-600 shadow-sm transition-all hover:text-white hover:border-esmerald_btn_normal_500 hover:bg-esmerald_btn_normal_500 hover:fill-white disabled:cursor-not-allowed disabled:border-esmerald-300"
                >
                  <svg
                    className="w-4 h-4 "
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 6.827c0 2.164.79 4.133 2.167 5.51.393.393.786.59 1.18.983h.195c.197 0 .196-.196.196-.196-.393-.787-.588-1.77-.588-2.754 0-2.164.982-4.329 2.36-5.706V1.518c0-.197-.197-.196-.197-.196h-2.95C.789 2.896 0 4.664 0 6.827zm2.559 12.59c2.36 2.164 5.31 3.343 8.851 3.343 7.082 0 12.59-5.702 12.59-12.586 0-3.344-1.378-6.492-3.542-8.656h-.196c0-.197-.196 0-.196 0 .59 1.574.983 3.147.983 4.918 0 7.278-5.902 13.373-13.377 13.373-1.77 0-3.344-.393-4.917-.983-.197 0-.196.199-.196.395zm5.9-11.998c0 .59.395 1.178.788 1.571h.392c3.54 1.18 4.722-.193 4.722-1.767V5.056c0-.196.196-.196.196-.196h.787c.197 0 .196-.196.196-.196-.196-1.18-.784-2.358-1.571-3.342h-2.363c0-.197-.196 0-.196.196v2.95c0 1.574-1.18 2.754-2.754 2.951 0-.197-.196 0-.196 0z" />
                  </svg>
                  <span className="font-semibold text-xs">View Lyrics</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <div className="right w-60">
          <div className="w-60 h-60 relative track--right">
            <Portrait image={data ? data.album : null} />
            <div className="absolute left-0 top-0 w-60 h-60 rounded bg-black opacity-5"></div>
            <button
              className="absolute w-60 h-60 opacity-50 hover:opacity-100 transition ease-in-out"
              onClick={() => {
                onSetPlayAudio(data ? data.id : "");
              }}
              disabled={data ? (data.preview_url ? false : true) : true}
            >
              <>
                {!isPlay ? (
                  <i className="bx bx-play-circle text-[100px] text-white"></i>
                ) : (
                  <i className="bx bx-pause-circle text-[100px] text-white"></i>
                )}
              </>
            </button>
            <audio
              id={data ? data.id : ""}
              src={data ? data.preview_url : ""}
              className={`hidden absolute w-full max-w-md mx-auto opacity-0 right-0 top-0`}
              controls
              style={{
                opacity: "0.5",
                height: "30px",
                width: "50px",
              }}
              onEnded={() => {
                onEnded();
              }}
            ></audio>
          </div>
        </div>
      </div>
    </>
  );
}

const Portrait = ({ image, title, alt }) => {
  if (image.length === 0) return null;
  return (
    <>
      <div className="w-60 h-60 bg-slate-100 rounded-lg absolute top-0 right-0">
        <img
          src={image.images[1].url}
          alt=""
          title=""
          className="object-cover rounded-lg"
        />
      </div>
    </>
  );
};

const IconMediaPlayer = ({ url }) => {
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
};

export default DetailsTracksSection;
