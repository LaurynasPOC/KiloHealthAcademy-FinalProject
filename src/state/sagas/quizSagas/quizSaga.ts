import { take } from "redux-saga/effects";

import { answerQuestion } from "state/slices/quizSlice";

export function* answerSaga() {
  yield take(answerQuestion);
}
