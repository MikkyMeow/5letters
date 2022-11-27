import { Context } from "context";
import { IKeyboard, IState } from "context/types";
import { useContext } from "react";
import "./index.css";

interface IProps {
  getLetter: (letter: IKeyboard) => void;
  backSpace: () => void;
  checkWord: () => void;
  checkIsAvailable: boolean;
}

export const Keyboard: React.FC<IProps> = ({
  getLetter,
  backSpace,
  checkWord,
  checkIsAvailable,
}) => {
  // @ts-ignore
  const [context]: [IState] = useContext(Context);
  const upperRow = context.keyboard.slice(0, 12);
  const middleRow = context.keyboard.slice(12, 23);
  const lowerRow = context.keyboard.slice(23);

  return (
    <div>
      <div className="keyboard__row">
        {upperRow.map((letter) => (
          <div
            className={`key ${letter.wordExist ? "key__gray" : ""} ${
              letter.letterExact ? "key__yellow" : ""
            }`}
            key={letter.code}
            onClick={() => getLetter(letter)}
          >
            {letter.code}
          </div>
        ))}
      </div>
      <div className="keyboard__row">
        {middleRow.map((letter) => (
          <div
            className={`key ${letter.wordExist ? "key__gray" : ""} ${
              letter.letterExact ? "key__yellow" : ""
            }`}
            key={letter.code}
            onClick={() => getLetter(letter)}
          >
            {letter.code}
          </div>
        ))}
      </div>
      <div className="keyboard__row">
        <div
          className={`key key__gray keyboard__buttons ${
            checkIsAvailable ? "key__yellow" : ""
          }`}
          onClick={() => checkIsAvailable && checkWord()}
        >
          ✓
        </div>
        {lowerRow.map((letter) => (
          <div
            className={`key ${letter.wordExist ? "key__gray" : ""} ${
              letter.letterExact ? "key__yellow" : ""
            }`}
            key={letter.code}
            onClick={() => getLetter(letter)}
          >
            {letter.code}
          </div>
        ))}
        <div
          className="key key__gray keyboard__buttons"
          onClick={() => backSpace()}
        >
          ✗
        </div>
      </div>
    </div>
  );
};
