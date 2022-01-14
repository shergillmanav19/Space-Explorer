import React, { useState } from "react";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import ExplorePhotos from "../components/ExplorePhotos";
import LikedPhotos from "../components/LikedPhotos";

function LandingPage() {
  const [buttonActive, setButtonActive] = useState("explore");

  function handleButtonClick(buttonName) {
    setButtonActive(buttonName);
  }

  return (
    <>
      <VStack>
        <Box>Welcome, Space Explorer</Box>
        <HStack>
          <Button onClick={() => handleButtonClick("explore")}>Explore</Button>
          <Button onClick={() => handleButtonClick("like")}>
            My Liked Pics
          </Button>
        </HStack>
      </VStack>
      {buttonActive == "explore" ? <ExplorePhotos /> : <LikedPhotos />}
    </>
  );
}

export default LandingPage;
