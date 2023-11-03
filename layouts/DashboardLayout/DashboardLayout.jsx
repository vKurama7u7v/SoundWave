import React from "react";
import AuthLayout from "../AuthLayout";

function DashboardLayout({ children }) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default DashboardLayout;
