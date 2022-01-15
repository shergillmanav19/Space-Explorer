import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useLikedPhotos } from "../hooks/useLikedPhotos";
import Photos from "./Photos";

function LikedPhotos() {
  const { likedPhotos, unlikeAll, like, unlike, contains } = useLikedPhotos();

  return (
    <div>
      <Box w="100%" display="flex" justifyContent="center" marginTop="15px">
        <Button
          bg="#BDD5EA"
          _hover={{ bg: "red.400", color: "white" }}
          onClick={unlikeAll}
        >
          Unlike all
        </Button>
      </Box>
      <Photos
        photos={likedPhotos}
        like={like}
        unlike={unlike}
        contains={contains}
      />
    </div>
  );
}

export default LikedPhotos;
