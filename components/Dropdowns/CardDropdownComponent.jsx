import React, { useState } from "react";

function CardDropdownComponent(props) {
  const { children } = props;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div class="relative inline-block">
        <button
          class="relative z-10 block p-x-2 text-gray-700 bg-white border border-transparent rounded-md  focus:border-blue-500 focus:ring-opacity-40 focus:ring focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
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
