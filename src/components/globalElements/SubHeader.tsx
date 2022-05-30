import React from "react";
import { Typography } from "components";

interface SubheaderProps {
  text: string;
}

const SubHeader: React.FC<SubheaderProps> = ({ text }) => (
  <Typography
    margin={"2rem 0"}
    textAlign={"center"}
    color={"primary"}
    type="h3"
  >
    {text}
  </Typography>
);

export default SubHeader;
