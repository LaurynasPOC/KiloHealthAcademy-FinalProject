import React, { useState, useEffect } from "react";
import SubHeader from "components/globalElements/SubHeader";

import axios from "axios";
import { GridWrapper, SectionWrapper, Container } from "components";

import RecipeCard from "../elements/RecipeCard";

import Footer from "components/footer/Footer";

const RecipiesSection = () => {
  // const dispatch = useDispatch();
  // const recipes = useSelector(selectRecipes);
  // console.log("iš recipes", dispatch(fetchRecipesAction()));
  // console.log("iš recipes section", recipes);

  // useEffect(() => {
  //   console.log("iš efekto", dispatch(setRecipesData(recipes)));
  // }, []);
  // console.log("iš efekto", dispatch(setRecipesData(recipes)));
  // console.log("last try", dispatch(fetchRecipesAction()));
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/recipes").then((resp) => {
      console.log("promise fulfiled");
      setRecipes(resp.data);
    });
  }, []);

  return (
    <>
      <SectionWrapper
        height="100wv"
        backgroundImage="linear-gradient(90deg, rgba(251,255,181,1) 0%, rgba(131,200,87,0.4051995798319328) 41%, rgba(231,247,163,1) 100%)"
      >
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
      <Footer />
    </>
  );
};

export default RecipiesSection;
