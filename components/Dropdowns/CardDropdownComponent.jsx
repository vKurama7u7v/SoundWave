import React, { useState } from "react";

function CardDropdownComponent(props) {
  const { children, time_range } = props;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div class="relative inline-block">
        <button
          class="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-gray-100 rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span class="mx-1">
            {time_range ? time_range.name : <>No Seleccionado</>}
          </span>
          <i
            class={
              isOpen ? "uil uil-angle-up text-lg" : "uil uil-angle-down text-lg"
            }
          ></i>
        </button>

        <div
          class={
            isOpen
              ? "absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-md"
              : "absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-md hidden"
          }
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default CardDropdownComponent;
