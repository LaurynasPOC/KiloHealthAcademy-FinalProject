import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as stages from "../../constants/QuizConstants";
import { fetchQuestionsSuccess } from "./quizSlice";

import { UserData } from "state/types";

const initialState = {
  stage: stages.START_QUIZ,
  userData: {
    username: "",
    email: "",
  },
};

const stageSlice = createSlice({
  name: "stages",
  initialState,
  reducers: {
    setStartQuiz: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
      state.stage = stages.FETCHING_QUIZ;
    },
    cancelQuiz: (state) => {
      state.stage = stages.START_QUIZ;
    },
    finnishQuiz(state) {
      state.stage = stages.END_QUIZ;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestionsSuccess, (state) => {
      state.stage = stages.QUIZ;
    });
  },
});

export const { setStartQuiz, cancelQuiz, finnishQuiz } = stageSlice.actions;
export default stageSlice;
