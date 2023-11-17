import { frequencyWords } from "common/frequencyWords";
import { randomInteger } from "common/helpers";
import React from "react";
import { IState } from "./types";

export const state: IState = {
  keyboard: [
    { code: "й", isExist: false, isExact: false, hasBeen: false },
    { code: "ц", isExist: false, isExact: false, hasBeen: false },
    { code: "у", isExist: false, isExact: false, hasBeen: false },
    { code: "к", isExist: false, isExact: false, hasBeen: false },
    { code: "е", isExist: false, isExact: false, hasBeen: false },
    { code: "н", isExist: false, isExact: false, hasBeen: false },
    { code: "г", isExist: false, isExact: false, hasBeen: false },
    { code: "ш", isExist: false, isExact: false, hasBeen: false },
    { code: "щ", isExist: false, isExact: false, hasBeen: false },
    { code: "з", isExist: false, isExact: false, hasBeen: false },
    { code: "х", isExist: false, isExact: false, hasBeen: false },
    { code: "ъ", isExist: false, isExact: false, hasBeen: false },
    { code: "ф", isExist: false, isExact: false, hasBeen: false },
    { code: "ы", isExist: false, isExact: false, hasBeen: false },
    { code: "в", isExist: false, isExact: false, hasBeen: false },
    { code: "а", isExist: false, isExact: false, hasBeen: false },
    { code: "п", isExist: false, isExact: false, hasBeen: false },
    { code: "р", isExist: false, isExact: false, hasBeen: false },
    { code: "о", isExist: false, isExact: false, hasBeen: false },
    { code: "л", isExist: false, isExact: false, hasBeen: false },
    { code: "д", isExist: false, isExact: false, hasBeen: false },
    { code: "ж", isExist: false, isExact: false, hasBeen: false },
    { code: "э", isExist: false, isExact: false, hasBeen: false },
    { code: "я", isExist: false, isExact: false, hasBeen: false },
    { code: "ч", isExist: false, isExact: false, hasBeen: false },
    { code: "с", isExist: false, isExact: false, hasBeen: false },
    { code: "м", isExist: false, isExact: false, hasBeen: false },
    { code: "и", isExist: false, isExact: false, hasBeen: false },
    { code: "т", isExist: false, isExact: false, hasBeen: false },
    { code: "ь", isExist: false, isExact: false, hasBeen: false },
    { code: "б", isExist: false, isExact: false, hasBeen: false },
    { code: "ю", isExist: false, isExact: false, hasBeen: false },
  ],
  guessedWord: "",
};

export const Context = React.createContext<IState | null>(null);
