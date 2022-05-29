import React, { useState } from "react";

import { Box, FlexWrapper, Typography } from "components";
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
  return (
    <Box
      margin={"auto"}
      maxWidth={{ _: "90%", tablet: "65%" }}
      p={"1rem"}
      my={"1rem"}
      borderRadius="br8"
      style={
        selected
          ? { border: `4px solid ${theme.colors.accent}` }
          : { border: `2px solid ${theme.colors.primary}` }
      }
      onClick={() => setSelected(!selected)}
    >
      <Box>
        <Typography color={"primary"} textAlign={"center"} fontWeight={"fw700"}>
          {title}
        </Typography>
        <Typography textAlign={"center"}>Mitybos planas</Typography>
      </Box>
      <Box>
        <FlexWrapper mr="1rem" justifyContent="center">
          <Typography color="primary" fontSize="fs20" fontWeight={"fw700"}>
            {price}&#x20AC;/mėnesiui
          </Typography>
        </FlexWrapper>
      </Box>
    </Box>
  );
};

export default PlanCard;
