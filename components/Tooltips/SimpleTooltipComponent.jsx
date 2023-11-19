import React, { useState } from "react";

function SimpleTooltipComponent(props) {
  const { icon, title, value, tooltip, tooltipColor, svgColor, custom } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div class={`relative h-7 ${custom ? custom : ""}`}>
        <div className="flex gap-1.5 items-center">
          <button
            class="text-gray-400 transition-colors duration-200 focus:outline-none border-gray-400 hover:text-esmerald_btn_normal_500 hover:border-esmerald_btn_normal_500 border rounded-full w-7 h-7 flex items-center justify-center"
            onMouseOver={() => setIsOpen(true)}
            onMouseOut={() => setIsOpen(false)}
          >
            <i className={`${icon ? icon : "uil uil-music-note"} text-lg`}></i>
          </button>

          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold text-gray-400">
              {title ? title : null}:
            </h4>
            <h4 className="text-sm font-bold text-slate-600">
              {value ? value : null}
            </h4>
          </div>
        </div>

        {!tooltip ? null : (
          <>
            <div
              class={`absolute z-50 flex items-center justify-center w-56 p-2 text-gray-700 font-regular rounded shadow-md -left-4 -top-14 shadow-gray-300
               ${isOpen ? "" : "hidden"}
               ${tooltipColor ? tooltipColor : "bg-white"}`}
            >
              <p class="text-sm w-full z-30 text-center font-semibold leading-[120%]">
                {tooltip ? tooltip : null}
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class={`w-6 h-6 absolute rotate-45 left-4 bottom-0.5 -mb-3 transform ${
                  svgColor ? svgColor : "text-white"
                } fill-current`}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
              </svg>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SimpleTooltipComponent;
