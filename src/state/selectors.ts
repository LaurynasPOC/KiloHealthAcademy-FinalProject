import { AppState } from "./types";

export const selectStage = (state: AppState) => state.stages.stage;
export const selectScore = (state: AppState) => state.quiz.score;

export const currentQuestionIndex = (state: AppState) =>
  state.quiz.currentQuestionIndex;
export const selectQuestion = (state: AppState) =>
  state.quiz.questions[state.quiz.currentQuestionIndex];
export const selectquestions = (state: AppState) => state.quiz.questions;
export const selectUsername = (state: AppState) =>
  state.stages.userData.username;
