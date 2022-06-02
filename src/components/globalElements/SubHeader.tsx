import React from "react";
import { Box, Typography } from "components";

interface SubheaderProps {
  text: string;
}

const SubHeader: React.FC<SubheaderProps> = ({ text }) => (
  <Box m="auto" width={"80%"}>
    <Typography
      margin={"2rem 0"}
      textAlign={"center"}
      color={"primary"}
      type="h6"
    >
      {text}
    </Typography>
  </Box>
);

export default SubHeader;
