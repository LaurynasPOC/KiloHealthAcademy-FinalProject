import { rootReducer } from "./store";

export interface Questions {
  questions: QuizData | any;
  currentQuestionIndex: any;
  score: number;
  // a: number;
  // b: number;
  // c: number;
  // d: number;
}

export interface QuizData {
  id: number;
  question: string;
  answers: string[];
}

export interface Stages {
  stage: string;
  userData: UserData;
}
export interface UserData {
  username: string;
  email: string;
}
export interface RecipesTypes {
  img: string;
  imgAlt: string;
  title: string;
  ingredients: string[];
  cooking: string[];
}

export type AppState = ReturnType<typeof rootReducer>;
