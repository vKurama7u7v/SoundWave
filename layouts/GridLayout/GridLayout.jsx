import React from "react";

function GridLayout(props) {
  const { children } = props;
  return (
    <>
      <div className="grid__layout grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </>
  );
}

export default GridLayout;
