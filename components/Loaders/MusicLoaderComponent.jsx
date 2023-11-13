import React from "react";

function MusicLoaderComponent(props) {
  const { width, height, color } = props;
  return (
    <>
      <div className="flex justify-center items-center" id="music__loader">
        <span
          class="loader"
          style={{ color: color ? color : "#4ECC48" }}
        ></span>
      </div>
    </>
  );
}

export default MusicLoaderComponent;
