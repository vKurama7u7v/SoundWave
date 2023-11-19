import React, { useState } from "react";

function ChartTooltipComponent(props) {
  const { primaryColor, title, value, tooltip, tooltipColor, svgColor, small } =
    props;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div class="w-32 relative">
        <div
          class={`flex items-center cursor-pointer ${small ? "" : "pb-1"}`}
          onMouseOver={() => setIsOpen(true)}
          onMouseOut={() => setIsOpen(false)}

          //   onMouseOutCapture={() => console.log("reseteando")}
        >
          <div
            class={`relative w-3 h-3 rounded-full ${
              primaryColor ? primaryColor : "bg-esmerald_btn_normal_500"
            }`}
          ></div>
          <p
            class={`ml-2 text-gray-500 font-medium ${
              small ? "text-xs" : "text-sm"
            }`}
          >
            {title ? title : null}
          </p>
        </div>

        {!tooltip ? null : (
          <>
            <div
              class={`absolute z-50 flex items-center justify-center w-48 p-2 text-gray-700 font-regular rounded shadow-md -left-4 -top-14 shadow-gray-300
               ${isOpen ? "" : "hidden"}
               ${tooltipColor ? tooltipColor : "bg-white"}`}
            >
              <p class="text-sm w-full z-30 text-center font-semibold">
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
        <div class={`flex flex-col justify-start ${small ? "" : "gap-1"}`}>
          <p class="text-sm font-bold text-left text-gray-600 ">
            {value ? parseInt(value * 100) : 0}%
          </p>
          <div class={`bg-gray-200 rounded w-28 ${small ? "h-1.5" : "h-2"}`}>
            <div
              class={`rounded h-1.5 transition-all ease-in ${
                primaryColor ? primaryColor : "bg-esmerald_btn_normal_500"
              } ${small ? "h-1.5" : "h-2"}`}
              style={{
                width: `${value ? parseInt(value * 100) : 0}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChartTooltipComponent;
