import { Badge, Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useLikedPhotos } from "../hooks/useLikedPhotos";

function Photos({ photos }) {
  const { like, unlike, contains } = useLikedPhotos();

  return (
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
            <Image src={photo.url} alt="Cool image here" objectFit="cover" />
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
              <Badge bg="lightpink">{photo.date}</Badge>
              <Box>{photo.explanation}</Box>
              {contains(photo.url) ? (
                <Button onClick={() => unlike(photo.url)}> Unlike</Button>
              ) : (
                <Button
                  onClick={() =>
                    like(photo.title, photo.explanation, photo.url, photo.date)
                  }
                >
                  Like
                </Button>
              )}
            </Box>
          </Box>
        ))}
    </Flex>
  );
}

export default Photos;
