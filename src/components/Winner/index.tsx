import "./index.css";

interface IProps {
  newGame: () => void;
  word: string;
  isWinner: "winner" | "looser";
}

export const Winner: React.FC<IProps> = ({ newGame, word, isWinner }) => {
  return (
    <div className="winner">
      <p>Вы {isWinner === "winner" ? "победили!" : "проиграли :("}</p>
      <p>Правильное слово: {word.toUpperCase()}</p>
      <button className="button" onClick={newGame}>
        Новая игра
      </button>
    </div>
  );
};
