import { Ground } from "components/Ground";
import { Keyboard } from "components/Keyboard";
import React, { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [attempt, setAttempt] = useState(1);
  const getLetter = (letter: string) => {
    if (word.length < attempt * 5) {
      setWord((prev) => prev + letter);
    } else {
      console.log("AKH");
    }
  };

  return (
    <div className="App">
      <Ground word={word} />
      <Keyboard getLetter={getLetter} />
    </div>
  );
}

export default App;
