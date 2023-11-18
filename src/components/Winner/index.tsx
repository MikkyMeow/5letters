import { Start } from "components/Start";
import "./index.css";

interface IProps {
  newGame: () => void;
  word: string;
  isWinner: "winner" | "looser";
}

export const Winner: React.FC<IProps> = ({ newGame, word, isWinner }) => {
  return (
    <div className="winner">
      <p className="winner__text">
        Вы {isWinner === "winner" ? "победили!" : "проиграли :("}
      </p>
      <p className="winner__text">Правильное слово: {word.toUpperCase()}</p>
      {/* <button className="button" onClick={() => newGame()}>
        Новая игра
      </button> */}
      <Start newGame={newGame} />
    </div>
  );
};
