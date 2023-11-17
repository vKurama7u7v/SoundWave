import React from "react";

import DashboardLayout from "@/layouts/DashboardLayout";
import TracksScreen from "@/screens/Tracks/TracksScreen";

function Tracks() {
  return (
    <>
      <DashboardLayout>
        <TracksScreen />
      </DashboardLayout>
    </>
  );
}

export default Tracks;
