import React from "react";

import { useRouter } from "next/router";

import TrackByIdScreen from "./TrackByIdScreen";

function TrackHeroScreen() {
  const { query } = useRouter();

  const track_id = query ? query.track : null;

  return (
    <>
      <TrackByIdScreen track_id={track_id} />
    </>
  );
}

export default TrackHeroScreen;
