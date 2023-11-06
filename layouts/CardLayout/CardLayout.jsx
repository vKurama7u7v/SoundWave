import React from "react";

function CardLayout(props) {
  const { children, custom, bgColor } = props;

  return (
    <>
      <div
        className={
          "card__item p-6 rounded-lg relative left-0 right-0 " + custom
        }
        style={{ background: bgColor }}
      >
        {children}
      </div>
    </>
  );
}

export default CardLayout;
