import { Context } from "context";
import { useContext } from "react";
import "./index.css";

interface IProps {
  getLetter: (letter: string) => void;
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
  const { keyboard } = useContext(Context);
  const upperRow = keyboard.slice(0, 12);
  const middleRow = keyboard.slice(12, 23);
  const lowerRow = keyboard.slice(23);

  return (
    <div>
      <div className="keyboard__row">
        {upperRow.map(({ code, wordExist, letterExact }) => (
          <div
            className={`key ${wordExist ? "key__gray" : ""} ${
              letterExact ? "key__yellow" : ""
            }`}
            key={code}
            onClick={() => getLetter(code)}
          >
            {code}
          </div>
        ))}
      </div>
      <div className="keyboard__row">
        {middleRow.map(({ code, wordExist, letterExact }) => (
          <div
            className={`key ${wordExist ? "key__gray" : ""} ${
              letterExact ? "key__yellow" : ""
            }`}
            key={code}
            onClick={() => getLetter(code)}
          >
            {code}
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
        {lowerRow.map(({ code, wordExist, letterExact }) => (
          <div
            className={`key ${wordExist ? "key__gray" : ""} ${
              letterExact ? "key__yellow" : ""
            }`}
            key={code}
            onClick={() => getLetter(code)}
          >
            {code}
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
