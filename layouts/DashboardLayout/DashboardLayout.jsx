import React, { useState, useEffect } from "react";
import AuthLayout from "../AuthLayout";
import SideBarComponent from "@/components/SideBar/SideBarComponent";
import TopBar from "@/components/TopBar";
import useAuth from "@/hooks/useAuth";
import { getToken } from "@/auth/tokens.auth";
import { getMeApi } from "@/api/user.api";

function DashboardLayout({ children }) {
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState(false);
  const [user, setUser] = useState(null);

  const { auth, logout, data_user } = useAuth();

  const onSetActive = () => {
    setIsActive(!isActive);
  };

  const onSetMode = () => {
    setMode(!mode);
  };

  return (
    <AuthLayout>
      <main className={mode ? "dark-mode" : ""}>
        <SideBarComponent isActive={isActive} onSetActive={onSetActive} />

        <section className="home">
          <TopBar
            isActive={isActive}
            onSetActive={onSetActive}
            mode={mode}
            onSetMode={onSetMode}
            user={data_user}
          />
          <>{children}</>
        </section>
      </main>
    </AuthLayout>
  );
}

export default DashboardLayout;
