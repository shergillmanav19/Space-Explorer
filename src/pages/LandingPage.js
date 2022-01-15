import React, { useState, useRef } from "react";
import { Box, Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import ExplorePhotos from "../components/ExplorePhotos";
import LikedPhotos from "../components/LikedPhotos";
import Error from "../components/Error";

function LandingPage() {
  const [error, setError] = useState("");
  const [buttonActive, setButtonActive] = useState("like");
  const [explorePhotosParams, setExplorePhotosParams] = useState({
    count: 20,
  });
  const countRef = useRef(20);

  function handleButtonClick(buttonName) {
    setButtonActive(buttonName);
    // Next line logic represents "sort" of a refresh button
    if (buttonName == "explore") {
      setExplorePhotosParams({
        count: explorePhotosParams.count,
      });
    }
  }
  function handleSearchClick() {
    if (countRef.current.value > 50 || countRef.current.value < 5) {
      setError("Please keep count below 50 and greater than 5");
      return;
    }
    setExplorePhotosParams({
      count: countRef.current.value,
    });
  }

  return (
    <>
      <Error myError={error} setError={setError} />
      <VStack marginTop="15px">
        <Box>Welcome, Space Explorer</Box>
        <HStack marginTop="5px">
          <Button onClick={() => handleButtonClick("explore")}>Explore</Button>
          <Button onClick={() => handleButtonClick("like")}>
            My Liked Pics
          </Button>
        </HStack>
        <HStack marginBottom="35px">
          <Text>Displaying</Text>
          <Input type="number" ref={countRef} placeholder="20" maxW="100px" />
          <Text>Pictures</Text>
          <Button onClick={handleSearchClick}>Search</Button>
        </HStack>
      </VStack>
      {buttonActive == "explore" ? (
        <>
          {console.log(explorePhotosParams)}
          <ExplorePhotos params={explorePhotosParams} />
        </>
      ) : (
        <LikedPhotos />
      )}
    </>
  );
}

export default LandingPage;
