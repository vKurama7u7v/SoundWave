import React, { useEffect } from "react";
import useAuth from "@/hooks/useAuth";

import DashboardLayout from "@/layouts/DashboardLayout";
import { getRecommendations } from "@/api/user.api";

function Profile() {
  const { auth, data_user, logout } = useAuth();

  useEffect(() => {
    (async () => {
      if (data_user) {
        await getRecommendations(logout);
      }
    })();
  }, [data_user]);

  return (
    <>
      <DashboardLayout>asdw</DashboardLayout>
    </>
  );
}

export default Profile;
