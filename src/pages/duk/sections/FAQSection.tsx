import React from "react";
import FAQPart from "../elements/FAQParts";
import { FAQ } from "constants/FAQData";
import { Box } from "components";
import SubHeader from "components/globalElements/SubHeader";

const FAQSection: React.FC = () => (
  <Box>
    <SubHeader text="Čia rasi atsakymus į dažniausiai užduodamus klausimus" />
    <Box
      borderRadius={"br8"}
      p="1rem"
      bg={"white"}
      m={"auto"}
      width={{ _: "80%", tablet: "50%" }}
    >
      <Box>
        {FAQ.map(({ question, answer }, i) => (
          <FAQPart key={i} question={question} answer={answer} />
        ))}
      </Box>
    </Box>
  </Box>
);

export default FAQSection;
