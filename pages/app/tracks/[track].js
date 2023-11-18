import React from "react";

import DashboardLayout from "@/layouts/DashboardLayout";
import TrackHeroScreen from "@/screens/Tracks/TrackHeroScreen";

function trackByID() {
  return (
    <>
      <DashboardLayout>
        <TrackHeroScreen />
      </DashboardLayout>
    </>
  );
}

export default trackByID;
