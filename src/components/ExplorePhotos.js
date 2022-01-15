import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import getImagesFromAPI from "../api/Api";

function ExplorePhotos({ params }) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchPhotos = async () => {
      try {
        let response = await getImagesFromAPI(params);
        response = await response.data;
        setPhotos([...response]);
        setLoading(false);
      } catch (e) {
        console.warn(e);
      }
    };
    fetchPhotos();
  }, [params]);

  return (
    <div>
      {loading ? (
        <Center h="400px">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      ) : (
        <VStack marginTop="15px">
          <Box bg="lightpink" padding="5px" borderRadius="5px">
            <WarningIcon /> Videos have been filtered out
          </Box>
          <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
            {photos
              .filter((photo) => photo.url && photo.url.includes("jpg"))
              .map((photo, i) => (
                <Box
                  maxW="md"
                  minH="md"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  key={i}
                  margin="10px"
                >
                  <Image src={photo.url} alt="Cool image here" />
                  <Box p="6">
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      {photo.title}
                    </Box>
                    <Box>{photo.explanation}</Box>
                  </Box>
                </Box>
              ))}
          </Flex>
        </VStack>
      )}
    </div>
  );
}

export default ExplorePhotos;
