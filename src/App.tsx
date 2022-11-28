import { checkForExacts, checkForExists, wordIsExists } from "common/helpers";
import { Ground } from "components/Ground";
import { Keyboard } from "components/Keyboard";
import { Winner } from "components/Winner";
import { Context, state } from "context";
import { IKeyboard } from "context/types";
import React, { useState } from "react";

function App() {
  const [context, setContext] = useState(state);
  const [word, setWord] = useState<IKeyboard[]>([]);
  const [attempt, setAttempt] = useState(1);
  const [isNotExist, setIsNotExist] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  console.log("guessedWord", context.guessedWord);

  const getLetter = (letter: IKeyboard) => {
    if (word.length < attempt * 5) {
      setWord((prev) => [...prev, letter]);
    }
  };

  const backSpace = () => {
    if (isNotExist) setIsNotExist(false);
    if (word.length > (attempt - 1) * 5) {
      setWord((prev) => prev.slice(0, prev.length - 1));
    }
  };

  const checkWord = () => {
    const currentWord = word
      .slice(word.length - 5)
      .map((l) => l.code)
      .join("");
    if (wordIsExists(currentWord)) {
      const resultWithExists = checkForExists(context.guessedWord, word);
      const result = checkForExacts(context.guessedWord, resultWithExists);
      setWord((prev) => [...prev.slice(0, word.length - 5), ...result]);
      if (context.guessedWord === currentWord) return setIsWinner(true);
      setAttempt((prev) => prev + 1);
    } else {
      setIsNotExist(true);
    }
  };

  // TODO: Добавить поддержку клавиатуры
  // document.addEventListener("keydown", (e) => {
  //   const charCode = e.key.charCodeAt(0);
  //   if (charCode > 1071 && charCode < 1104) {
  //     getLetter({ code: e.key, letterExact: false, wordExist: false });
  //   }
  // });

  return (
    // @ts-ignore
    <Context.Provider value={[context, setContext]}>
      <div className="App">
        <h3>5 Б У К В</h3>
        <p>Попытка {attempt}</p>
        {isWinner && <Winner />}
        <Ground word={word} isNotExist={isNotExist} />
        <Keyboard
          getLetter={getLetter}
          backSpace={backSpace}
          checkWord={checkWord}
          checkIsAvailable={!!word && !(word.length % (5 * attempt))}
        />
      </div>
    </Context.Provider>
  );
}

export default App;
