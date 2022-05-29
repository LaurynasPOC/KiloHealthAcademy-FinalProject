import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import { useQuery } from "styles/breakpoints";
import ReviewCard from "../elements/ReviewCard";
import { REVIEW } from "constants/ReviewData";
import { Box, FlexWrapper, Container } from "components";

interface Props {
  width?: number;
  itemToShow?: number;
}

const ReviewSection: React.FC<Props> = () => {
  const { isTablet } = useQuery();
  const settings = [{ width: 1, itemToShow: 1 }];

  return (
    <Container>
      <Box maxWidth={{ _: "90%", mobile: "60%", tablet: "90%" }} m="auto">
        {isTablet ? (
          <ReactElasticCarousel
            breakPoints={settings}
            showArrows={false}
            enableMouseSwipe={true}
            isRTL={true}
          >
            {REVIEW.map(({ name, city, img, alt, review }, i) => {
              return (
                <ReviewCard
                  key={i}
                  name={name}
                  city={city}
                  img={img}
                  alt={alt}
                  review={review}
                />
              );
            })}
          </ReactElasticCarousel>
        ) : (
          <FlexWrapper>
            {REVIEW.map(({ name, city, img, alt, review }, i) => {
              return (
                <ReviewCard
                  key={i}
                  name={name}
                  city={city}
                  img={img}
                  alt={alt}
                  review={review}
                />
              );
            })}
          </FlexWrapper>
        )}
      </Box>
    </Container>
  );
};

export default ReviewSection;
