import React from "react";

function CardTitleComponent(props) {
  const { children } = props;
  return (
    <>
      <div class="flex items-center mb-2 justify-between">{children}</div>
    </>
  );
}

export default CardTitleComponent;
