import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useAuth from "@/hooks/useAuth";
import { getMeApi } from "@/api/user.api";

function AuthLayout({ children }) {
  const router = useRouter();

  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      if (!auth) {
        router.push("/");
      }
    })();
  }, [auth]);

  return <>{children}</>;
}

export default AuthLayout;
