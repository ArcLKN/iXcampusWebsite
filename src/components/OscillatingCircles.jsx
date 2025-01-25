import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

// Global CSS for animation
const styles = `
@keyframes wave0 {
  0% {
    transform: scale(0);
    border: 1px solid white;
  }
  100% {
    transform: scale(1);
    opacity: 1;
    border: 5px solid white;
  }
}

@keyframes wave1 {
  0% {
    transform: scale(1);
    border: 5px solid white;
  }
  100% {
    transform: scale(2);
    opacity: 0.8;
    border: 2px solid white;
  }
}

@keyframes wave2 {
  0% {
    transform: scale(1);
    border: 4px solid white;
  }
  100% {
    transform: scale(1.5);
    opacity: 0.6;
    border: 2px solid white;
  }
}

@keyframes wave3 {
  0% {
    transform: scale(1);
    border: 3px solid white;
  }
  100% {
    transform: scale(1.5);
    opacity: 0.4;
    border: 1px solid white; /* Reducing border by 1px */
  }
}

@keyframes wave4 {
  0% {
    transform: scale(1);
    border: 2px solid white;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
    border: 1px solid white; /* Reducing border by 1px */
  }
}
`;

const OscillatingCircles = ({setTextToShow, id}) => {
  const [doOscillate, setDoOscillate] = useState(false);
  return (
    <>
      {/* Include CSS animation in the head of the document */}
      <style>{styles}</style>
      <Box
        position="relative"
        w="100vw"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
            position="absolute"
            width="50px"
            height="50px"
            borderRadius="50%"
            border="1px solid white"
            animation={doOscillate ? "wave0 2s infinite ease-in-out" : null}
            opacity={1}
        />
        <Box
            position="absolute"
            width="50px"
            height="50px"
            borderRadius="50%"
            border="5px solid white"
            animation={doOscillate ? "wave1 2s infinite ease-in-out" : null}
            opacity={1}
        />
        <Box
          className="test"
          position="absolute"
          width="100px"
          height="100px"
          borderRadius="50%"
          border="4px solid white"
            animation={doOscillate ? "wave2 2s infinite ease-in-out" : null}
            opacity={0.8}
        />
        <Box
          position="absolute"
          width="150px"
          height="150px"
          borderRadius="50%"
          border="3px solid white"
            animation={doOscillate ? "wave3 2s infinite ease-in-out" : null}
            opacity={0.6}
            onMouseEnter={() => {
              setTextToShow(id);
              setDoOscillate(true);
            }}
            onMouseLeave={() => {
              setTextToShow(0)
              setDoOscillate(false)
            }}
            zIndex={3}
        />
        <Box
          position="absolute"
          width="225px"
          height="225px"
          borderRadius="50%"
          border="2px solid white"
            animation={doOscillate ? "wave4 2s infinite ease-in-out" : null}
            opacity={0.4}
        />
        {/* Add more circles if necessary */}
      </Box>
    </>
  );
};

export default OscillatingCircles;
