import React from "react";

import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardScreen from "@/screens/Dashboard/DashboardScreen";

function Dashboard() {
  return (
    <>
      <DashboardLayout>
        <DashboardScreen />
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
