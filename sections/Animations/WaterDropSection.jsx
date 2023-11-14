import React from "react";
import anime from "animejs";

function WaterDropSection() {
  return (
    <>
      <div className="relative grid h-auto place-content-center px-8 bg-[#212121] overflow-hidden">
        <DotGrid />
      </div>
    </>
  );
}

const GRID_WIDTH = 80;
const GRID_HEIGHT = 20;

function DotGrid() {
  const handleDotClick = (e) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.3, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-30 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          ></div>
        </div>
      );

      index++;
    }
  }

  return (
    <>
      <div
        className="grid w-fit"
        style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      >
        {dots}
      </div>
    </>
  );
}

export default WaterDropSection;
