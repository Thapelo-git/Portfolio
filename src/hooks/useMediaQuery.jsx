import { useSyncExternalStore } from "react";

export function useMediaQuery(query) {
  const getSnapshot = () =>
    window.matchMedia(query).matches;

  const subscribe = (callback) => {
    const media = window.matchMedia(query);
    media.addEventListener("change", callback);
    return () => media.removeEventListener("change", callback);
  };

  return useSyncExternalStore(subscribe, getSnapshot);
}


export default useMediaQuery;