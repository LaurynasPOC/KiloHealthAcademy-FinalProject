import { all } from "redux-saga/effects";
import startQuizSaga from "./stageSaga/stageSaga";
import quizSaga from "./quizSagas/quizSaga";
import answerSaga from "./quizSagas/quizSaga";

export default function* rootSaga(): Generator {
  yield all([startQuizSaga(), answerSaga()]);
}
