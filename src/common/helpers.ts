import { IKeyboard } from "context/types";
import { frequencyWords } from "./frequencyWords";
import { words } from "./words";

export const randomInteger = (min: number, max: number) => {
  const result = min + Math.random() * (max + 1 - min);
  return Math.floor(result);
};

export const guessWord = () => {
  return frequencyWords[randomInteger(1, frequencyWords.length)];
};

export const wordIsExists = (word: string) => {
  return words.includes(word);
};

export const checkForExists = (guessed: string, word: IKeyboard[]) => {
  const guessedWordArr = guessed.split("");
  const currentWordArr = word.slice(word.length - 5).map((l) => l);
  const result = currentWordArr.map((l) => {
    if (guessedWordArr.includes(l.code)) return { ...l, isExist: true };
    return l;
  });
  return result;
};

export const checkForExacts = (guessed: string, word: IKeyboard[]) => {
  const guessedWordArr = guessed.split("");
  const result = word.map((l, i) => {
    if (l.code === guessedWordArr[i]) return { ...l, isExact: true };
    return l;
  });
  return result;
};

export const keyboardUpdate = (keyboard: IKeyboard[], word: IKeyboard[]) => {
  const result = keyboard.map((letter) => {
    const matchLetter = word.find((l) => l.code === letter.code);
    if (matchLetter) {
      return { ...matchLetter, hasBeen: true };
    } else {
      return letter;
    }
  });

  return result;
};
