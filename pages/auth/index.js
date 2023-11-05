import React from "react";

import DashboardLayout from "@/layouts/DashboardLayout";

function Dashboard() {
  // console.log("token:", spotifyResponseToken);
  // const getProfile = async () => {
  //   let accessToken =
  //     JSON.parse(localStorage.getItem("spotifyResponseToken"))?.value ?? null;

  //   const response = await fetch("https://api.spotify.com/v1/me", {
  //     headers: {
  //       Authorization: "Bearer " + accessToken.access_token,
  //     },
  //   });

  //   const data = await response.json();
  //   console.log(data);
  // };

  // getProfile();
  return (
    <>
      <DashboardLayout>Estamos Autenticados</DashboardLayout>
    </>
  );
}

export default Dashboard;
