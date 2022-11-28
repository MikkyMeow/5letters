import { IKeyboard } from "context/types";
import "./index.css";

interface IProps {
  keyboard: IKeyboard[];
  getLetter: (letter: IKeyboard) => void;
  backSpace: () => void;
  checkWord: () => void;
  checkIsAvailable: boolean;
}

export const Keyboard: React.FC<IProps> = ({
  keyboard,
  getLetter,
  backSpace,
  checkWord,
  checkIsAvailable,
}) => {
  const upperRow = keyboard.slice(0, 12);
  const middleRow = keyboard.slice(12, 23);
  const lowerRow = keyboard.slice(23);

  return (
    <div>
      <div className="keyboard__row">
        {upperRow.map((letter) => (
          <div
            className={`key ${letter.hasBeen ? "key__has-been" : ""} ${
              letter.isExist ? "key__exist" : ""
            } ${letter.isExact ? "key__exact" : ""}`}
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
            className={`key ${letter.hasBeen ? "key__has-been" : ""} ${
              letter.isExist ? "key__exist" : ""
            } ${letter.isExact ? "key__exact" : ""}`}
            key={letter.code}
            onClick={() => getLetter(letter)}
          >
            {letter.code}
          </div>
        ))}
      </div>
      <div className="keyboard__row">
        <div
          className={`key keyboard__buttons ${
            checkIsAvailable ? "key__exact" : ""
          }`}
          onClick={() => checkIsAvailable && checkWord()}
        >
          ✓
        </div>
        {lowerRow.map((letter) => (
          <div
            className={`key ${letter.hasBeen ? "key__has-been" : ""} ${
              letter.isExist ? "key__exist" : ""
            } ${letter.isExact ? "key__exact" : ""}`}
            key={letter.code}
            onClick={() => getLetter(letter)}
          >
            {letter.code}
          </div>
        ))}
        <div className="key keyboard__buttons" onClick={() => backSpace()}>
          ✗
        </div>
      </div>
    </div>
  );
};
