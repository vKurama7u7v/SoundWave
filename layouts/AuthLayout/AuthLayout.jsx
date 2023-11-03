import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isAuthenticated } from "@/auth/atoms.auth";
import { useRouter } from "next/navigation";

function AuthLayout({ children }) {
  const router = useRouter();

  const [isAuth, setIsAuth] = useRecoilState(isAuthenticated);
  console.log(isAuth);

  useEffect(() => {
    if (!isAuth) {
      router.push("/");
    }
  }, []);

  return <>{children}</>;
}

export default AuthLayout;
