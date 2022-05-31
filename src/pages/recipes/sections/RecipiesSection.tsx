import React, { useState, useEffect } from "react";
import SubHeader from "components/globalElements/SubHeader";

import axios from "axios";
import { GridWrapper, SectionWrapper, Container } from "components";

import RecipeCard from "../elements/RecipeCard";

import Footer from "components/footer/Footer";

const RecipiesSection = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/recipes").then((resp) => {
      setRecipes(resp.data);
    });
  }, []);

  return (
    <>
      <SectionWrapper height="100wv">
        <Container>
          <SubHeader text="Sveikesnis maistas - geresnė savijauta!" />
          <GridWrapper
            gridTemplateColumns={{
              laptop: "repeat(3, 1fr)",
              tablet: "repeat(2, 1fr)",
              mobile: "repeat(1, 1fr)",
            }}
            gridGap={"1rem"}
          >
            {recipes.map(({ img, imgAlt, title, ingredients, cooking }, i) => (
              <RecipeCard
                key={i}
                img={img}
                imgAlt={imgAlt}
                title={title}
                ingredients={ingredients}
                cooking={cooking}
              />
            ))}
          </GridWrapper>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default RecipiesSection;
