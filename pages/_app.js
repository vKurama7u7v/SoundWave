import React, { useMemo, useState, useEffect } from "react";
import { RecoilRoot } from "recoil";

import "@/styles/globals.css";
import DebugObserver from "@/hooks/DebugObserver.hooks";
import { initRecoilState } from "@/auth/recoilState.auth.js";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot initializeState={initRecoilState}>
      <DebugObserver />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
