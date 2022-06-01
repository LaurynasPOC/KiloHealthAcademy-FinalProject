import React, { useState } from "react";

import { Box, FlexWrapper, Typography } from "components";

import { theme } from "styles/theme";
import { Input } from "components/buttons/Input";

export interface Props {
  title?: string;
  price?: number;
  preDiscount?: number;
  afterDiscount?: number;
  discount?: number;
}

const MonthPlans: React.FC<Props> = ({
  title,
  price,
  preDiscount,
  afterDiscount,
  discount,
}) => {
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
        <Box>
          <Typography textAlign={"center"}>
            Kaina perkant 6mėn abonimentą
          </Typography>
        </Box>
        <FlexWrapper justifyContent={"space-evenly"}>
          <Typography textDecoration={"line-through"}>
            {preDiscount}&#x20AC;
          </Typography>
          <Typography fontWeight={"fw700"}>{afterDiscount}&#x20AC;</Typography>

          {discount && (
            <Box>
              {selected ? (
                <Typography color="secondary">-{discount}%</Typography>
              ) : (
                ""
              )}
            </Box>
          )}
        </FlexWrapper>
        <Box>
          {!preDiscount && <Typography>Apmokama kas mėnesį</Typography>}
        </Box>
      </Box>
    </Box>
  );
};

export default MonthPlans;
