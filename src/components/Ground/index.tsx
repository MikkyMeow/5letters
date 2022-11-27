import { IKeyboard } from "context/types";
import "./index.css";

interface IProps {
  word: IKeyboard[];
  isNotExist: boolean;
}

export const Ground: React.FC<IProps> = ({ word, isNotExist }) => {
  const array = [...word];
  while (array.length < 30) {
    array.push({ code: "", letterExact: false, wordExist: false });
  }
  return (
    <div className="ground">
      {array.map((letter, index) => {
        const notExist =
          isNotExist && index < word.length && index > word.length - 6;
        return (
          <div
            key={index}
            className={`letter ${notExist ? "letter__red" : ""}`}
          >
            {letter.code}
          </div>
        );
      })}
    </div>
  );
};
