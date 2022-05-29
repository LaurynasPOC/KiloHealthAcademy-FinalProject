import { put, take } from "redux-saga/effects";
import { finnishQuiz } from "state/slices/stageSlice";
import { nextQuestion, answerQuestion } from "state/slices/quizSlice";

export default function* answerSaga() {
  for (let i = 0; i < 8; i++) {
    yield take(answerQuestion);
    yield put(nextQuestion());
  }
  yield put(finnishQuiz());
}