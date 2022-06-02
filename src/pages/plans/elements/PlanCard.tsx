import React, { useState, useEffect } from "react";
import axios from "axios";

import { Box, Typography } from "components";
import { theme } from "styles/theme";

export interface Props {
  title?: string;
  price?: number;
  preDiscount?: number;
  afterDiscount?: number;
  discount?: number;
}

const PlanCard: React.FC<Props> = ({ title, price }) => {
  const [selected, setSelected] = useState(false);

  const selectHandler = () => {
    setSelected(!selected);
  };

  return (
    <Box
      p={"1rem"}
      m={"1rem auto"}
      borderRadius="br8"
      style={
        selected
          ? { border: `4px solid ${theme.colors.accent}` }
          : { border: `2px solid ${theme.colors.primary}` }
      }
      onClick={selectHandler}
    >
      <Box>
        <Typography color={"primary"} textAlign={"center"} fontWeight={"fw700"}>
          {title}
        </Typography>
      </Box>
      <Box mr="1rem" textAlign="center">
        <Typography color="primary" fontSize="fs20" fontWeight={"fw700"}>
          {price}&#x20AC;/mėnesiui
        </Typography>
        <Typography textAlign={"center"}>Mitybos planas</Typography>
      </Box>
    </Box>
  );
};

export default PlanCard;
