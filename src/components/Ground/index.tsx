import "./index.css";

interface IProps {
  word: string;
}

export const Ground: React.FC<IProps> = ({ word }) => {
  const array = word.split("");
  while (array.length < 30) {
    array.push("");
  }
  return (
    <div className="row">
      {array.map((letter, index) => (
        <div key={index} className="letter">
          {letter}
        </div>
      ))}
    </div>
  );
};
