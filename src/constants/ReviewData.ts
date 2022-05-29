export interface ReviewTypes {
  name: string;
  city: string;
  img: string;
  alt: string;
  review: string;
}
export const REVIEW: ReviewTypes[] = [
  {
    name: "Jurgita, 28",
    city: "Klaipėda",
    img: "emily",
    alt: "best story of my life",
    review:
      "Treniruotės superinės, labai patinka, o matomas rezultatas užkabino dar labiau ir motyvuoja judėti toliau! Būtinai sportuosiu ir toliau su jumis, treniruotės labai geros, pasirenku pagal nuotaiką kurią tą dieną daryti.",
  },
  {
    name: "Kristina, 38",
    city: "Biržai",
    img: "kylie",
    alt: "be cool as me",
    review:
      "OMG kaip aš tau esu dėkinga už įkvėpimą ir palaikymą ir svarbiausia už tuos spyrius šiknon! Nuostabus jausmas dabar ir dar daugiau ateityje! Visiškas gimimas ir atradimas savęs iš naujo!! Ačiū!!",
  },
  {
    name: "Justina, 51",
    city: "Kaunas",
    img: "jessica",
    alt: "yes its true",
    review:
      "Sportuoju ir toliau nebegaliu sustoti. Sportas tapo toks pats įpratas kaip ir valgymas. Progresas matosi ant kūno ir ypač ant kojų, raumenukai ganaryškus jau. Labai patinka vaizdas kaip keičiasi kūnas.",
  },
];
