import React from "react";
import { PLANS } from "constants/PlansData";
import { PlansTypes } from "constants/PlansData";

import PlanCard from "../elements/PlanCard";
import { Box, FlexWrapper, Typography } from "components";
import { DefaultButton } from "components/buttons/DefaultButton";

const PlansSection: React.FC<PlansTypes> = () => (
  <>
    <Box
      p={"1rem"}
      width={{ _: "90%", mobile: "80%", tablet: "70%" }}
      margin="auto"
      borderRadius={"br8"}
      bg="white"
    >
      {PLANS.map(({ power, active, healthy }, i) => (
        <Box key={i}>
          <Typography my="1rem" textAlign={"center"} type="h6" color="primary">
            Aktyvaus gyvenimo ritmo planas
          </Typography>
          <FlexWrapper
            flexDirection={{ _: "column", tablet: "row" }}
            justifyContent={"center"}
            m="auto"
            key={i}
          >
            {active.map(({ title, price }) => (
              <PlanCard key={title} title={title} price={price} />
            ))}
          </FlexWrapper>
          <Typography my="1rem" textAlign={"center"} type="h6" color="primary">
            Norintiems užsiauginti raumeninės masės
          </Typography>
          <FlexWrapper
            flexDirection={{ _: "column", tablet: "row" }}
            justifyContent={"center"}
            m="auto"
            key={i + 1}
          >
            {power.map(({ title, price }) => (
              <PlanCard key={title} title={title} price={price} />
            ))}
          </FlexWrapper>
          <Typography my="1rem" textAlign={"center"} type="h6" color="primary">
            Norintiems maitintis sveikiau
          </Typography>
          <FlexWrapper
            flexDirection={{ _: "column", tablet: "row" }}
            justifyContent={"center"}
            m="auto"
            key={i + 2}
          >
            {healthy.map(({ title, price }) => (
              <PlanCard key={title} title={title} price={price} />
            ))}
          </FlexWrapper>
        </Box>
      ))}
      <DefaultButton
        m={"auto"}
        height={"2rem"}
        width={"6rem"}
        borderRadius={"br8"}
        my="1rem"
      >
        Pirkti
      </DefaultButton>
    </Box>
  </>
);

export default PlansSection;
