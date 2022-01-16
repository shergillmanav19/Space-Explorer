import { Box, Center, Spinner, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { WarningIcon } from "@chakra-ui/icons";
import getImagesFromAPI from "../api/Api";
import { useLikedPhotos } from "../hooks/useLikedPhotos";
import Photos from "./Photos";

function ExplorePhotos({ params }) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { like, unlike, contains } = useLikedPhotos();

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
            <Text>
              <WarningIcon />
              Videos have been filtered out
            </Text>
          </Box>
          <Photos
            photos={photos}
            like={like}
            unlike={unlike}
            contains={contains}
          />
        </VStack>
      )}
    </div>
  );
}

export default ExplorePhotos;
