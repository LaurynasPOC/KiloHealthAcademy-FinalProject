import React from "react";
import { Box } from "components";
import styled, { keyframes } from "styled-components/macro";

const sideToSideSlide = keyframes`
  0%{
    background: aqua;
    box-shadow: 0 0 10px aqua;
    width: 10px;
    left: 0;
  }
  25% {
    background: aqua;
    box-shadow: 0 0 10px aqua;
    width: 100px;
    left: 0;
  }
  50% {
    background: greenyellow;
    box-shadow: 0 0 10px greenyellow;
    width: 10px;
    left: 90px;
  }
  75%{
    background: greenyellow;
    box-shadow: 0 0 10px greenyellow;
    width: 100px;
    left: 0;
  }
  100%{
    background: aqua;
    box-shadow: 0 0 10px aqua;
    width: 10px;
    left: 0;
  }

`;

const LoadingSlider = styled.div`
  position: absolute;
  margin: auto auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: aqua;
  box-shadow: 0 0 10px aqua;
  animation: ${sideToSideSlide} 2s ease infinite;
`;

const LoadingAnimation = () => {
  return (
    <Box height={"100vh"} bg="accent">
      <LoadingSlider />
    </Box>
  );
};

export default LoadingAnimation;
