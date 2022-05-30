import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  answerQuestion,
  backQuestion,
  nextQuestion,
} from "state/slices/quizSlice";
import { AppState } from "state/types";

import { QuizButton } from "components/buttons/QuizButton";
import { finnishQuiz } from "state/slices/stageSlice";

import { Box, FlexWrapper, SectionWrapper, Typography } from "components";
import {
  currentQuestionIndex,
  selectQuestion,
  selectquestions,
} from "state/selectors";

import { DefaultButton } from "components/buttons/DefaultButton";

const QuizPageSection = () => {
  const dispatch = useDispatch();
  const currentQuestion = useSelector(selectQuestion);

  const currentQuestionInd = useSelector(currentQuestionIndex);
  const questionsInd = [0, 1, 2, 3];

  const questionsLength = useSelector(selectquestions).length;

  const answerHandler = (answer: any) => {
    dispatch(answerQuestion(answer));
  };

  const endQuizHandler = () => {
    dispatch(finnishQuiz());
  };

  const nextQuestionHandler = () => {
    dispatch(nextQuestion());
  };

  const backQuestionHandler = () => {
    dispatch(backQuestion());
  };

  return (
    <SectionWrapper height="100vh">
      <Box
        p="2rem"
        borderRadius={"br8"}
        m={"auto"}
        bg="white"
        width={{ _: "80%", tablet: "50%" }}
      >
        <Typography textAlign={"center"} color="primary" type="h6">
          {currentQuestion.question}
        </Typography>
        <Box>
          {currentQuestionInd === 2 ? (
            questionsInd.map((ind) => (
              <Typography key={ind} py="0.5rem">
                <QuizButton onClick={() => answerHandler(ind)}>
                  {currentQuestion.answers[ind]}
                </QuizButton>
              </Typography>
            ))
          ) : (
            <Box>
              {questionsInd.map((ind) => (
                <Typography key={ind} py="0.5rem">
                  <QuizButton onClick={() => answerHandler(ind)}>
                    {currentQuestion.answers[ind]}
                  </QuizButton>
                </Typography>
              ))}
            </Box>
          )}

          <FlexWrapper justifyContent={"center"}>
            {currentQuestionInd === 0 ? (
              ""
            ) : (
              <DefaultButton
                py={"0.5rem"}
                px={"1rem"}
                onClick={() => backQuestionHandler()}
              >
                Atgal
              </DefaultButton>
            )}

            {currentQuestionInd === questionsLength - 1 ? (
              ""
            ) : (
              <DefaultButton
                py={"0.5rem"}
                onClick={() => nextQuestionHandler()}
              >
                Sekantis
              </DefaultButton>
            )}
            <Box>
              <DefaultButton px={"1rem"} py={"0.5rem"} onClick={endQuizHandler}>
                Išeiti
              </DefaultButton>
            </Box>
          </FlexWrapper>
        </Box>
      </Box>
    </SectionWrapper>
  );
};

export default QuizPageSection;
