import React from "react";
import { Box } from "components";
import { Typography } from "components/typography/Typography";

interface SubheaderProps {
  text: string;
}

const SubHeader: React.FC<SubheaderProps> = ({ text }) => {
  return (
    <Typography
      margin={"2rem 0"}
      textAlign={"center"}
      color={"primary"}
      type="h3"
    >
      {text}
    </Typography>
  );
};

export default SubHeader;
