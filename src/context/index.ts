import { randomInteger } from "common/helpers";
import { words } from "common/words";
import React from "react";
import { IState } from "./types";

export const state: IState = {
  keyboard: [
    { code: "й", wordExist: false, letterExact: false },
    { code: "ц", wordExist: false, letterExact: false },
    { code: "у", wordExist: false, letterExact: false },
    { code: "к", wordExist: false, letterExact: false },
    { code: "е", wordExist: false, letterExact: false },
    { code: "н", wordExist: false, letterExact: false },
    { code: "г", wordExist: false, letterExact: false },
    { code: "ш", wordExist: false, letterExact: false },
    { code: "щ", wordExist: false, letterExact: false },
    { code: "з", wordExist: false, letterExact: false },
    { code: "х", wordExist: false, letterExact: false },
    { code: "ъ", wordExist: false, letterExact: false },
    { code: "ф", wordExist: false, letterExact: false },
    { code: "ы", wordExist: false, letterExact: false },
    { code: "в", wordExist: false, letterExact: false },
    { code: "а", wordExist: false, letterExact: false },
    { code: "п", wordExist: false, letterExact: false },
    { code: "р", wordExist: false, letterExact: false },
    { code: "о", wordExist: false, letterExact: false },
    { code: "л", wordExist: false, letterExact: false },
    { code: "д", wordExist: false, letterExact: false },
    { code: "ж", wordExist: false, letterExact: false },
    { code: "э", wordExist: false, letterExact: false },
    { code: "я", wordExist: false, letterExact: false },
    { code: "ч", wordExist: false, letterExact: false },
    { code: "с", wordExist: false, letterExact: false },
    { code: "м", wordExist: false, letterExact: false },
    { code: "и", wordExist: false, letterExact: false },
    { code: "т", wordExist: false, letterExact: false },
    { code: "ь", wordExist: false, letterExact: false },
    { code: "б", wordExist: false, letterExact: false },
    { code: "ю", wordExist: false, letterExact: false },
  ],
  guessedWord: words[randomInteger(1, words.length)],
};

export const Context = React.createContext<IState | null>(null);
