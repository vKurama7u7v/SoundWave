import React from "react";

function MusicLoaderComponent(props) {
  const { width, height } = props;
  return (
    <>
      <div className="flex justify-center items-center" id="music__loader">
        <span class="loader"></span>
      </div>
    </>
  );
}

export default MusicLoaderComponent;
