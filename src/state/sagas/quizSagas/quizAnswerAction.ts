import { createAction } from "@reduxjs/toolkit";

const fetchAnswerPrefix = "user/GET_ANSWERS";

export const fetchAnswerAction = createAction(fetchAnswerPrefix);
