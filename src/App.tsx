import { randomInteger, wordIsExists } from "common/helpers";
import { words } from "common/words";
import { Ground } from "components/Ground";
import { Keyboard } from "components/Keyboard";
import React, { useState } from "react";

function App() {
  const [guessedWord] = useState(words[randomInteger(1, words.length)]);
  const [word, setWord] = useState("");
  const [attempt, setAttempt] = useState(1);

  console.log(guessedWord);

  const getLetter = (letter: string) => {
    if (word.length < attempt * 5) {
      setWord((prev) => prev + letter);
    }
  };

  const backSpace = () => {
    if (word.length > (attempt - 1) * 5) {
      setWord((prev) => prev.slice(0, prev.length - 1));
    }
  };

  const checkWord = () => {
    const currentWord = word.slice(word.length - 5);
    if (wordIsExists(currentWord)) {
      console.log("ok");
    }
    setAttempt((prev) => prev + 1);
  };

  // TODO: Добавить поддержку клавиатуры
  // document.addEventListener("keydown", (e) => {
  //   const charCode = e.key.charCodeAt(0);
  //   if (charCode > 1071 && charCode < 1104) {
  //     getLetter(e.key);
  //   }
  // });

  return (
    <div className="App">
      <h3>5 Б У К В</h3>
      <p>Попытка {attempt}</p>
      <Ground word={word} />
      <Keyboard
        getLetter={getLetter}
        backSpace={backSpace}
        checkWord={checkWord}
        checkIsAvailable={!!word && !(word.length % (5 * attempt))}
      />
    </div>
  );
}

export default App;
