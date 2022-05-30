import React from "react";
import { PLANS } from "constants/PlansData";
import { PlansTypes } from "constants/PlansData";

import MonthPlans from "pages/quiz/elements/MonthPlans";

import { Box } from "components";
import { useSelector } from "react-redux";
import { selectScore } from "state/selectors";
import { DefaultButton } from "components/buttons/DefaultButton";

const MonthPlansSection: React.FC<PlansTypes> = () => {
  const score = useSelector(selectScore);
  return (
    <Box
      p={"2rem"}
      borderRadius={"br8"}
      margin={"auto"}
      maxWidth={{ _: "80%", tablet: "50%" }}
      bg={"white"}
    >
      {PLANS.map(({ power, active, healthy }, i) => {
        if (score < 10) {
          return (
            <Box key={i}>
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
            </Box>
          );
        } else if (score <= 15) {
          return (
            <Box key={i}>
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
            </Box>
          );
        } else {
          return (
            <Box key={i}>
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
            </Box>
          );
        }
      })}
      <Box mt="2rem">
        <DefaultButton
          m={"auto"}
          height={"2rem"}
          width={"6rem"}
          borderRadius={"br8"}
        >
          Pirkti
        </DefaultButton>
      </Box>
    </Box>
  );
};
export default MonthPlansSection;
