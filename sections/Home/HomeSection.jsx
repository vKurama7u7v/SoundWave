import React from "react";

function HomeSection(props) {
  const { handleLoginClick } = props;

  return (
    <>
      <>
        {/* Hero */}
        <div className="relative z-20 overflow-hidden before:absolute before:top-0 before:start-1/2">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 my-24">
            {/* Announcement Banner */}
            {/* <div className="flex justify-center">
              <a
                className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                PRO release - Join to waitlist
                <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </a>
            </div> */}
            {/* End Announcement Banner */}
            {/* Title */}
            <div className="mt-5 max-w-2xl text-center mx-auto">
              <h1 className="block font-bold text-gray-200 text-4xl md:text-5xl lg:text-6xl ">
                Let{"'"}s Listen{" "}
                <span className="bg-clip-text bg-gradient-to-tl from-teal-400 to-green-400 text-transparent">
                  Together
                </span>
              </h1>
            </div>
            {/* End Title */}
            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className=" text-gray-200 text-sm">
                <span className="font-semibold text-green-400">SoundWave</span>{" "}
                se basa en datos de Spotify para brindar información valiosa a
                usuarios, ofreciendo perspicacia sobre preferencias, tendencias
                y evolución musical, mejorando la experiencia musical
                personalizada
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 gap-3 flex justify-center">
              <button
                className="inline-flex justify-center items-center gap-x-3 text-center bg-esmerald_active_500 hover:bg-esmerald-500 transition-all ease-in border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 "
                onClick={handleLoginClick}
              >
                <i class="bx bxl-spotify text-lg"></i>
                Continue with Spotify
              </button>
            </div>
            {/* End Buttons */}
          </div>
        </div>
        {/* End Hero */}
      </>
    </>
  );
}

export default HomeSection;
