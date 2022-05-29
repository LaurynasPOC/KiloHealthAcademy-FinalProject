import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, CombinedState, AnyAction } from "redux";
import { useDispatch } from "react-redux";
// import userSlice from "./slice";

import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/rootSaga";
import stageSlice from "./slices/stageSlice";
import quizSlice from "./slices/quizSlice";
// import quizSlice from "./slices/quizSlice";

import { Questions, Stages } from "./types";

export interface RootState {
  stages: Stages;
  quiz: Questions;
  // recipes: RecipesTypes;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  stages: stageSlice.reducer,
  quiz: quizSlice.reducer,
  // recipes: recipesSlice.reducer,
});

export const rootReducer = (state: any, action: AnyAction) =>
  combinedReducer(state, action);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

//FROM DOCUMENTATION
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
