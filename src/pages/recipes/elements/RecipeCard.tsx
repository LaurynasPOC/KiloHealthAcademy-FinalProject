import React from "react";
import { theme } from "styles/theme";

import {
  Image,
  FlexWrapper,
  Typography,
  SectionWrapper,
  Box,
} from "components";

interface RecipeProps {
  title: string;
  imgAlt: string;
  img: string;
  ingredients: string[];
  cooking: string[];
}

const RecipeCard: React.FC<RecipeProps> = ({
  img,
  imgAlt,
  title,
  ingredients,
  cooking,
}) => (
  <SectionWrapper>
    <Box
      margin={"auto"}
      borderRadius={"base"}
      border={`2px solid ${theme.colors.primary}`}
      maxWidth={"500px"}
      maxHeight={"100%"}
    >
      <Box
        borderBottom={`2px solid ${theme.colors.primary}`}
        borderTopLeftRadius={"base"}
        borderTopRightRadius="base"
        bg="white"
      >
        <Typography
          color={"primary"}
          textAlign={"center"}
          fontWeight={"fw700"}
          fontSize={"fs18"}
        >
          {title}
        </Typography>
      </Box>
      <Image maxWidth="100%" src={img} alt={imgAlt} />
      <Box
        mt="-0.3rem"
        borderTop={`2px solid ${theme.colors.primary}`}
        borderBottomLeftRadius={"base"}
        borderBottomRightRadius="base"
        bg="white"
        px={{ _: "1.5rem" }}
        py="1rem"
      >
        <FlexWrapper>
          <FlexWrapper>
            <Box>
              <FlexWrapper>
                <Box ml="-0.5rem" mr="0.3rem">
                  <Image src="forkAndKnife" alt="tasty" />
                </Box>
                <Typography fontWeight={"fw700"}>Mums reikės</Typography>
              </FlexWrapper>

              {ingredients.map((ing, i) => (
                <Box as="li" key={i}>
                  {ing}
                </Box>
              ))}
            </Box>
          </FlexWrapper>
          <FlexWrapper>
            <Box ml="2rem">
              <FlexWrapper>
                <Box ml="-0.5rem" mr="0.3rem">
                  <Image src="clock" alt="time to eat" />
                </Box>
                <Typography fontWeight={"fw700"}>Paruošimas</Typography>
              </FlexWrapper>

              {cooking.map((cook, i) => (
                <Box as="li" key={i}>
                  {cook}
                </Box>
              ))}
            </Box>
          </FlexWrapper>
        </FlexWrapper>
      </Box>
    </Box>
  </SectionWrapper>
);

export default RecipeCard;
