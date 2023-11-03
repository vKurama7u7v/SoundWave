import { keysAbleToSave } from "@/hooks/DebugObserver.hooks";
import {
  isAuthenticated,
  spotifyRefreshToken,
  spotifyResponseToken,
} from "./atoms.auth";

const atomsToSave = [
  { key: keysAbleToSave[0], atom: spotifyRefreshToken },
  { key: keysAbleToSave[1], atom: spotifyResponseToken },
  { key: keysAbleToSave[2], atom: isAuthenticated },
];

export const initRecoilState = async ({ set }) => {
  console.log("desde recoil:", spotifyResponseToken);
  try {
    const localStorageLength = localStorage.length;

    for (let i = 0; i < localStorageLength; i++) {
      const localStorageKey = localStorage.key(i);
      const indexOfKey = keysAbleToSave.indexOf(localStorageKey);

      if (indexOfKey !== -1) {
        const atom = atomsToSave[indexOfKey].atom;

        //   console.log(
        //     atom,
        //     JSON.parse(localStorage.getItem(localStorageKey))?.value ?? null
        //   );
        set(
          atom,
          JSON.parse(localStorage.getItem(`${localStorageKey}`))?.value ?? null
        );
      }
    }
  } catch (error) {}
};
