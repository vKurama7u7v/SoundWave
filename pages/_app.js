import React, { useMemo, useState, useEffect } from "react";
import { RecoilRoot } from "recoil";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
