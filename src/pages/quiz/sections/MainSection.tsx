import React from "react";
import EndQuizSection from "./EndQuizSection";
import QuizPageSection from "./QuizPageSection";
import FetchingSection from "./FetchingSection";
import StartQuizSection from "./StartQuizSection";
// import * as stages from "../../../constants/QuizConstants";
import { useSelector } from "react-redux";
import { selectStage } from "state/selectors";
import {
  START_QUIZ,
  FETCHING_QUIZ,
  QUIZ,
  END_QUIZ,
} from "../../../constants/QuizConstants";
import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";

const MainSection = () => {
  const currentStage = useSelector(selectStage);
  let displayedPage;
  switch (currentStage) {
    case START_QUIZ:
      displayedPage = <StartQuizSection />;
      break;
    case FETCHING_QUIZ:
      displayedPage = <FetchingSection />;
      break;
    case QUIZ:
      displayedPage = <QuizPageSection />;
      break;
    case END_QUIZ:
      displayedPage = <EndQuizSection />;
      break;
    default:
      break;
  }
  return (
    <>
      <Navbar />
      {displayedPage}
      <Footer />
    </>
  );
};

export default MainSection;
