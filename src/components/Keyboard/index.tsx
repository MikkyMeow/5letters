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
  const upperRow = ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"];
  const middleRow = ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"];
  const lowerRow = ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю"];

  return (
    <div>
      <div className="keyboard__row">
        {upperRow.map((letter) => (
          <div className="key" key={letter} onClick={() => getLetter(letter)}>
            {letter}
          </div>
        ))}
      </div>
      <div className="keyboard__row">
        {middleRow.map((letter) => (
          <div className="key" key={letter} onClick={() => getLetter(letter)}>
            {letter}
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
          <div className="key" key={letter} onClick={() => getLetter(letter)}>
            {letter}
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
