import { all } from "redux-saga/effects";
import startQuizSaga from "./stageSaga/stageSaga";

export default function* rootSaga(): Generator {
  yield all([startQuizSaga()]);
}
