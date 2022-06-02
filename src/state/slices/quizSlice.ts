import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Questions, QuizData } from "state/types";

const initialState: Questions = {
  questions: {
    question: "",
    answers: [""],
  },
  score: null as unknown as number,
  preAnswer: null as unknown as number,
  currentQuestionIndex: null as unknown as any,
  scoreArr: [],
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
      state.scoreArr.push(action.payload);
      state.currentQuestionIndex += 1;
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
    backQuestion: (state) => {
      state.scoreArr.pop();
      state.currentQuestionIndex -= 1;
    },
    endQuiz: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
  },
});

export const {
  fetchQuestionsSuccess,
  answerQuestion,
  nextQuestion,
  backQuestion,
  endQuiz,
} = quizSlice.actions;
export default quizSlice;
