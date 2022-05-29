import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { actionChannel } from "redux-saga/effects";
import { Questions, QuizData } from "state/types";
import { finnishQuiz } from "./stageSlice";

const initialState: Questions = {
  questions: {
    question: "",
    answers: [""],
  },
  //   a: 1,
  //   b: 2,
  //   c: 3,
  //   d: 4,
  score: null as unknown as number,
  currentQuestionIndex: null as unknown as any,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    fetchQuestionsSuccess: (state, action: PayloadAction<QuizData>) => {
      state.questions = action.payload;
      state.score = 0;
      state.currentQuestionIndex = 0;
    },
    answerQuestion: (state, action: PayloadAction<number>) => {
      if (action.payload) {
        state.score += action.payload;
      } else if (action.payload) {
        state.score += action.payload;
      } else if (action.payload) {
        state.score += action.payload;
      } else {
        state.score += 4;
      }
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
    backQuestion: (state) => {
      state.currentQuestionIndex -= 1;
    },
  },
});

export const {
  fetchQuestionsSuccess,
  answerQuestion,
  nextQuestion,
  backQuestion,
} = quizSlice.actions;
export default quizSlice;
