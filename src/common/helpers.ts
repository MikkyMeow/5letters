import { words } from "./words";

export const randomInteger = (min: number, max: number) => {
  const result = min + Math.random() * (max + 1 - min);
  return Math.floor(result);
};

export const wordIsExists = (word: string) => {
  return words.includes(word);
};
