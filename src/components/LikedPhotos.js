import { Button } from "@chakra-ui/react";
import React from "react";
import { useLikedPhotos } from "../hooks/useLikedPhotos";
import Photos from "./Photos";

function LikedPhotos() {
  const { likedPhotos, unlikeAll } = useLikedPhotos();
  return (
    <div>
      <Button onClick={unlikeAll}>Unlike all</Button>
      <Photos photos={likedPhotos} />
    </div>
  );
}

export default LikedPhotos;
