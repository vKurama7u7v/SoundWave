import React from "react";

function BreadrumsTitleComponent(props) {
  const { title, route } = props;
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold text-gray-600 capitalize">
          {title ? title : null}
        </h1>
        {/* Breadrumbs */}
        <div class="flex items-center pb-6 overflow-x-auto whitespace-nowrap">
          <a href="#" class="text-gray-600 ">
            <i class="uil uil-estate text-lg"></i>
          </a>

          <span class="mx-2 text-gray-500 ">
            <i class="uil uil-angle-right text-lg"></i>
          </span>

          <a href="#" class="text-esmerald-500 font-medium">
            {title ? title : null}
          </a>
        </div>
      </div>
    </>
  );
}

export default BreadrumsTitleComponent;
