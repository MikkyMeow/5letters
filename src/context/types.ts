export interface IKeyboard {
  code: string;
  wordExist: boolean;
  letterExact: boolean;
}

export interface IState {
  keyboard: IKeyboard[];
  guessedWord: string;
}
