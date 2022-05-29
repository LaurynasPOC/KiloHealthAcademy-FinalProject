import React from "react";
import FAQPart from "../elements/FAQParts";
import { FAQ } from "constants/FAQData";
import { Typography, Box } from "components";

const FAQSection: React.FC = () => (
  <Box>
    <Typography m="2rem" textAlign={"center"} type="h6" color="primary">
      Čia rasi atsakymus į dažniausiai užduodamus klausimus
    </Typography>
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
