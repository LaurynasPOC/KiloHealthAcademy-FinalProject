import React from "react";
import { ReviewTypes } from "constants/ReviewData";
import { FlexWrapper, Image, Typography, Box } from "components";

const ReviewCard: React.FC<ReviewTypes> = ({
  name,
  city,
  img,
  alt,
  review,
}) => {
  const starArr: Array<any> = [];

  for (let i = 0; i < 5; i++) {
    const imgStar = <Image key={i} src="star" alt="star" />;
    starArr.push(imgStar);
  }

  return (
    <Box m="0.5rem" bg="white" borderRadius={"br8"}>
      <Box textAlign={"left"} margin="1rem">
        <Typography fontWeight={"fw700"}>{name}</Typography>
        <Typography margin="0">{city}</Typography>
        <FlexWrapper justifyContent={"left"}>{starArr}</FlexWrapper>
        <Image src={img} alt={alt} />
        <Typography my="1rem">{review}</Typography>
      </Box>

      <Box margin="0 1rem"></Box>
    </Box>
  );
};
export default ReviewCard;
