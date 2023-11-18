import { FC, useState } from "react";
import "./index.css";
import { words } from "common/words";

interface IProps {
  newGame: (word?: string) => void;
}

export const Start: FC<IProps> = ({ newGame }) => {
  const [guessableWord, setGuessableWord] = useState("");
  const [disabledGuessableBtn, setDisabledGuessableBtn] = useState(true);

  const onChange = (string: string) => {
    const value = string.toLocaleLowerCase();
    const isCyrillic = value.match(/^[ЁёА-Яа-я]*$/);
    const isLength = value.length === 5;
    if (isCyrillic) {
      if (isLength) {
        setGuessableWord(value);
        const isExist = words.includes(value);
        if (isExist) {
          setDisabledGuessableBtn(false);
        } else {
          setDisabledGuessableBtn(true);
        }
      } else {
        setGuessableWord(value.slice(0, 5));
      }
    }
  };

  return (
    <div className="start__root">
      <h3>5 Б У К В</h3>
      <div className="start__input">
        <input
          className="input"
          value={guessableWord}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Введите слово"
        />
        <button
          disabled={disabledGuessableBtn}
          className="button start__input-button"
          onClick={() => newGame(guessableWord)}
        >
          {">"}
        </button>
      </div>
      <button className="start__items button" onClick={() => newGame()}>
        Случайное слово
      </button>
    </div>
  );
};
