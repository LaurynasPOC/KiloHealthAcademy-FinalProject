import React from "react";

import { Box, Typography } from "components";

interface HeadlineProps {
  text: string;
  color?: string;
}
const Headline: React.FC<HeadlineProps> = ({ text }) => {
  return (
    <Box my="50rem" margin="auto" textAlign="center" maxWidth="35rem">
      <Typography type="h3" color={"basegrey"}>
        {text}
      </Typography>
    </Box>
  );
};

export default Headline;
