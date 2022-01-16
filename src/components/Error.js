import React from "react";

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";

function Error({ myError, setError }) {
  return (
    <>
      {myError !== "" ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>An error occured!</AlertTitle>
          <AlertDescription>{myError}</AlertDescription>
          <CloseButton
            onClick={() => setError("")}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      ) : (
        <></>
      )}
    </>
  );
}

export default Error;
