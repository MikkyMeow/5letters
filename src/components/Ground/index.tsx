import { IKeyboard } from "context/types";
import "./index.css";

interface IProps {
  word: IKeyboard[];
  isNotExist: boolean;
}

export const Ground: React.FC<IProps> = ({ word, isNotExist }) => {
  const array = [...word];
  while (array.length < 30) {
    array.push({ code: "", isExact: false, isExist: false, hasBeen: false });
  }

  return (
    <div className="ground">
      {array.map((letter, index) => {
        const notExist =
          isNotExist && index < word.length && index > word.length - 6;
        return (
          <div
            key={index}
            className={`letter ${notExist ? "letter__red" : ""} ${
              letter.isExist ? "letter__gray" : ""
            } ${letter.isExact ? "letter__yellow" : ""}`}
          >
            {letter.code}
          </div>
        );
      })}
    </div>
  );
};
