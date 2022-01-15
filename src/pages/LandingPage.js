import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  HStack,
  Input,
  NumberInputField,
  VStack,
} from "@chakra-ui/react";
import ExplorePhotos from "../components/ExplorePhotos";
import LikedPhotos from "../components/LikedPhotos";

function LandingPage() {
  const [buttonActive, setButtonActive] = useState("explore");
  const [explorePhotosParams, setExplorePhotosParams] = useState({
    count: 20,
    start_time: "",
    end_time: "",
    thumbs: "",
  });
  const countRef = useRef(20);

  function handleButtonClick(buttonName) {
    setButtonActive(buttonName);
  }
  function handleSearchClick() {
    console.log(countRef);
    setExplorePhotosParams({
      count: countRef.current.value,
    });
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
        <HStack>
          <Box>Count</Box>
          <Input type="number" ref={countRef} placeholder="" size="sm" />
          <Button onClick={handleSearchClick}>Search</Button>
        </HStack>
      </VStack>
      {buttonActive == "explore" ? (
        <ExplorePhotos params={explorePhotosParams} />
      ) : (
        <LikedPhotos />
      )}
    </>
  );
}

export default LandingPage;
