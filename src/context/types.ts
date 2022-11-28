export interface IKeyboard {
  code: string;
  isExist: boolean;
  isExact: boolean;
  hasBeen: boolean;
}

export interface IState {
  keyboard: IKeyboard[];
  guessedWord: string;
}
