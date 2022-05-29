import axios, { AxiosResponse } from "axios";
import { take, fork, put, takeEvery } from "redux-saga/effects";
import { setStartQuiz } from "state/slices/stageSlice";
import { fetchQuestionsSuccess } from "state/slices/quizSlice";
import { fetchQuestionAction } from "./stageSagaAction";

const url = "http://localhost:3001/quiz";

function* fetchQuestionsSaga() {
  try {
    const { data }: AxiosResponse = yield axios.get(url);

    yield put(fetchQuestionsSuccess(data));
  } catch (err) {
    yield console.log(err);
  }
}

export default function* startQuizSaga() {
  while (true) {
    yield take(setStartQuiz);
    yield fork(fetchQuestionsSaga);
    yield takeEvery(fetchQuestionAction, fetchQuestionsSaga);
  }
}
