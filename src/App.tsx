import {
  checkForExacts,
  checkForExists,
  guessWord,
  keyboardUpdate,
  wordIsExists,
} from "common/helpers";
import { Ground } from "components/Ground";
import { Keyboard } from "components/Keyboard";
import { Winner } from "components/Winner";
import { Context, state } from "context";
import { IKeyboard } from "context/types";
import React, { useState } from "react";

const App = () => {
  const [context, setContext] = useState(state);
  const [keyboard, setKeyboard] = useState<IKeyboard[]>(state.keyboard);
  const [word, setWord] = useState<IKeyboard[]>([]);
  const [attempt, setAttempt] = useState(1);
  const [isNotExist, setIsNotExist] = useState(false);
  const [isWinner, setIsWinner] = useState<"winner" | "looser" | null>(null);
  const [guessableWord, setGuessableWord] = useState("");

  const newGame = (word?: string) => {
    setContext((prev) => {
      return { ...prev, guessedWord: word ? word : guessWord() };
    });
    setWord([]);
    setKeyboard(state.keyboard);
    setAttempt(1);
    setIsWinner(null);
    setIsNotExist(false);
  };

  const getLetter = (letter: IKeyboard) => {
    if (word.length < attempt * 5) {
      setWord((prev) => [
        ...prev,
        { ...letter, isExact: false, isExist: false, hasBeen: false },
      ]);
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
      setKeyboard(keyboardUpdate(keyboard, result));
      setWord((prev) => [...prev.slice(0, word.length - 5), ...result]);
      if (context.guessedWord === currentWord) return setIsWinner("winner");
      if (word.length === 30) return setIsWinner("looser");
      setAttempt((prev) => prev + 1);
    } else {
      setIsNotExist(true);
    }
  };

  // TODO: Добавить поддержку клавиатуры
  // useEffect(() => {
  //   window.addEventListener("keydown", (e) => {
  //     const charCode = e.key.charCodeAt(0);
  //     if (charCode > 1071 && charCode < 1104) {
  //       getLetter({
  //         code: e.key,
  //         isExact: false,
  //         isExist: false,
  //         hasBeen: false,
  //       });
  //     }
  //   });
  // }, []);

  return (
    // @ts-ignore
    <Context.Provider value={[context, setContext]}>
      <div className="App">
        <h3>5 Б У К В</h3>
        {!context.guessedWord ? (
          <>
            <div>lapti</div>
            <input
              style={{
                backgroundColor: "transparent",
                border: "1px solid yellow",
                borderRadius: 4,
              }}
              value={guessableWord}
              onChange={(e) =>
                guessableWord.length < 5
                  ? setGuessableWord(e.target.value)
                  : undefined
              }
            />
            <button className="button" onClick={() => newGame(guessableWord)}>
              guess word
            </button>
            <button className="button" onClick={() => newGame()}>
              Новая игра
            </button>
          </>
        ) : (
          <>
            {isWinner && (
              <Winner
                isWinner={isWinner}
                word={context.guessedWord}
                newGame={newGame}
              />
            )}
            <Ground word={word} isNotExist={isNotExist} />
            <Keyboard
              keyboard={keyboard}
              getLetter={getLetter}
              backSpace={backSpace}
              checkWord={checkWord}
              checkIsAvailable={!!word && !(word.length % (5 * attempt))}
            />
          </>
        )}
      </div>
    </Context.Provider>
  );
};

export default App;
