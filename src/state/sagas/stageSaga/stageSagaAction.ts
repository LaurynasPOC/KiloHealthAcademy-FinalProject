import { createAction } from "@reduxjs/toolkit";

const fetchQuestionsPrefix = "quiz/GET_QUESTIONS";

export const fetchQuestionAction = createAction(fetchQuestionsPrefix);
