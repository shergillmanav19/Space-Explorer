import React, { useCallback } from "react";
import useLocalStorage from "./useLocalStorage";
export const useLikedPhotos = () => {
  const [likedPhotos, setLikedPhotos] = useLocalStorage(
    "user:liked_photos",
    []
  );
  const like = useCallback(
    (title, explanation, url, date) => {
      //check if the combo is contained otherwise
      if (!contains(url)) {
        setLikedPhotos([
          ...likedPhotos,
          { title: title, explanation: explanation, url: url, date: date },
        ]);
      }
    },
    [likedPhotos]
  );

  const unlikeAll = () => {
    setLikedPhotos([]);
  };
  const contains = useCallback(
    (url) => {
      return likedPhotos.some((photo) => photo.url === url);
    },
    [likedPhotos]
  );
  const unlike = (url) => {
    setLikedPhotos(likedPhotos.filter((photo) => photo.url !== url));
  };

  return { like, unlike, contains, unlikeAll, likedPhotos };
};
