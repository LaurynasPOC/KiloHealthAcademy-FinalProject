import React, { useState } from "react";
import { Box, FlexWrapper, Typography, Image } from "components";
import { theme } from "styles/theme";
import { FAQTypes } from "constants/FAQData";

const FAQPart: React.FC<FAQTypes> = ({ question, answer }) => {
  const [selected, setSelected] = useState(false);
  return (
    <Box
      borderRadius={"br8"}
      p="1rem"
      my={"0.5rem"}
      border={`2px solid ${theme.colors.primary}`}
      onClick={() => setSelected(!selected)}
    >
      <FlexWrapper justifyContent="space-between">
        <Typography fontWeight={"fw700"}>{question}</Typography>
        {selected ? (
          <Image src="expandLess" alt="more" />
        ) : (
          <Image src="expandMore" alt="less" />
        )}
      </FlexWrapper>
      {selected && <Typography>{answer}</Typography>}
    </Box>
  );
};

export default FAQPart;
