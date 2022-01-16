import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import ExplorePhotos from "../components/ExplorePhotos";
import LikedPhotos from "../components/LikedPhotos";
import Error from "../components/Error";

function LandingPage() {
  const [error, setError] = useState("");
  const [buttonActive, setButtonActive] = useState("explore");
  const [inputValue, setInputValue] = useState("");

  const [explorePhotosParams, setExplorePhotosParams] = useState({
    count: 20,
  });
  const countRef = useRef(20);

  function handleButtonClick(buttonName) {
    setButtonActive(buttonName);
    // Next line logic represents "sort" of a refresh button
    if (buttonName === "explore") {
      setExplorePhotosParams({
        count: explorePhotosParams.count,
      });
    }
  }
  function handleSearchClick() {
    if (countRef.current.value > 50 || countRef.current.value < 5) {
      setError("Please keep count between 50 and 5");
      return;
    }
    setExplorePhotosParams({
      count: countRef.current.value,
    });
  }

  const handleChange = (event) => setInputValue(event.target.value);

  return (
    <>
      <div className="banner">
        <Error myError={error} setError={setError} />

        <VStack marginTop="15px">
          <Box w="500px" bg="black" borderRadius="5px">
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color="#F7F7FF"
              textAlign="center"
            >
              Welcome to Space
            </Text>
          </Box>
          <HStack marginTop="5px">
            <Button
              isActive={buttonActive === "explore" ? true : false}
              bg="#BDD5EA"
              onClick={() => handleButtonClick("explore")}
              _hover={{ bg: "#577399", color: "white" }}
              _active={{
                bg: "#577399",
              }}
            >
              Explore
            </Button>
            <Button
              isActive={buttonActive === "like" ? true : false}
              bg="#BDD5EA"
              onClick={() => handleButtonClick("like")}
              _hover={{ bg: "#577399", color: "white" }}
              _active={{
                bg: "#577399",
              }}
            >
              My Liked Pics
            </Button>
          </HStack>
        </VStack>
      </div>
      {buttonActive === "explore" ? (
        <>
          <Center>
            <HStack marginTop="10px">
              <Text>Displaying</Text>
              <Input
                type="number"
                ref={countRef}
                placeholder="20"
                maxW="100px"
                variant="outline"
                focusBorderColor="blue.100"
                value={inputValue}
                onChange={handleChange}
              />

              <Text>pictures</Text>
              <Button
                bg="#BDD5EA"
                _hover={{ bg: "green", color: "white" }}
                onClick={handleSearchClick}
              >
                Search
              </Button>
            </HStack>
          </Center>
          <ExplorePhotos params={explorePhotosParams} />
        </>
      ) : (
        <LikedPhotos />
      )}
    </>
  );
}

export default LandingPage;
