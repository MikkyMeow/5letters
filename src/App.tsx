import { Ground } from "components/Ground";
import { Keyboard } from "components/Keyboard";
import React, { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [attempt] = useState(1);
  const getLetter = (letter: string) => {
    if (word.length < attempt * 5) {
      setWord((prev) => prev + letter);
    }
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
      <h3>5БУКВ</h3>
      <Ground word={word} />
      <Keyboard getLetter={getLetter} />
    </div>
  );
}

export default App;
