import React from "react";
import { PLANS } from "constants/PlansData";
import { PlansTypes } from "constants/PlansData";

import MonthPlans from "pages/quiz/elements/MonthPlans";
import { Box, FlexWrapper, Typography } from "components";
import { DefaultButton } from "components/buttons/DefaultButton";

const MonthPlansSection: React.FC<PlansTypes> = () => (
  <>
    <Box width={"90%"} margin="auto" borderRadius={"br8"} bg="white">
      {PLANS.map(({ power, active, healthy }, i) => (
        <>
          <Typography my="1rem" textAlign={"center"} type="h6" color="primary">
            Aktyvaus gyvenimo ritmo planas
          </Typography>
          <FlexWrapper key={i}>
            {active.map(
              ({ title, price, preDiscount, afterDiscount, discount }) => (
                <MonthPlans
                  key={title}
                  title={title}
                  price={price}
                  preDiscount={preDiscount}
                  afterDiscount={afterDiscount}
                  discount={discount}
                />
              )
            )}
          </FlexWrapper>
          <Typography my="1rem" textAlign={"center"} type="h6" color="primary">
            Norintiems užsiauginti raumeninės masės
          </Typography>
          <FlexWrapper key={i}>
            {power.map(
              ({ title, price, preDiscount, afterDiscount, discount }) => (
                <MonthPlans
                  key={title}
                  title={title}
                  price={price}
                  preDiscount={preDiscount}
                  afterDiscount={afterDiscount}
                  discount={discount}
                />
              )
            )}
          </FlexWrapper>
          <Typography my="1rem" textAlign={"center"} type="h6" color="primary">
            Norintiems maitintis sveikiau
          </Typography>
          <FlexWrapper key={i}>
            {healthy.map(
              ({ title, price, preDiscount, afterDiscount, discount }) => (
                <MonthPlans
                  key={title}
                  title={title}
                  price={price}
                  preDiscount={preDiscount}
                  afterDiscount={afterDiscount}
                  discount={discount}
                />
              )
            )}
          </FlexWrapper>
        </>
      ))}
    </Box>

    <DefaultButton
      m={"auto"}
      height={"2rem"}
      width={"6rem"}
      borderRadius={"br8"}
    >
      Pirkti
    </DefaultButton>
  </>
);

export default MonthPlansSection;
