import React from "react";

function ImageMoodComponent(props) {
  const { mood } = props;

  if (!mood) return null;

  return (
    <>
      <div className="w-full h-[13em] relative">
        <div className="absolute w-full h-[13em] z-20 flex items-center justify-center">
          <a
            href={mood ? mood.img : "#"}
            target="_blank"
            className="uppercase px-4 py-2 bg-esmerald_btn_normal_500 rounded text-xs text-white font-semibold hover:bg-esmerald-500 transition-all ease-in-out"
          >
            {mood ? mood.emotion : ""}
          </a>
        </div>
        <div className="absolute w-full h-[13em] bg-black opacity-10"></div>
        <img
          class="w-full h-full object-cover rounded"
          src={mood ? mood.img : ""}
          alt={mood ? mood.emotion : ""}
        />
      </div>
    </>
  );
}

export default ImageMoodComponent;
