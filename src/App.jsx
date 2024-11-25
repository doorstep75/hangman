/* NOTE: I do take on board where you reference I use 'too many comments' but at this stage they are useful for
me for when I wish to look at my work later and reference how I tackled particular areas of code*/
import React, { useState } from "react";
import Header from "./components/Header"; // Header
import HangmanGraphic from "./components/HangmanGraphic"; // Hangman graphic
import WordDisplay from "./components/WordDisplay"; // Word display
import Keyboard from "./components/Keyboard"; // Keyboard for guessing letters
import GameControls from "./components/GameControls"; // Game controls (restart, status)
import Help from "./components/Help"; // Help feature
import randomWords from "./randomWords"; // Word list

function App() {
  // Game state management
  const [wordToGuess, setWordToGuess] = useState(
    randomWords[Math.floor(Math.random() * randomWords.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState("playing");

  // Handle guesses
  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || gameStatus !== "playing") return;
    setGuessedLetters([...guessedLetters, letter]);

    if (!wordToGuess.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
      if (newWrongGuesses >= 9) setGameStatus("lost");
    }

    const allLettersGuessed = wordToGuess
      .split("")
      .every((l) => guessedLetters.includes(l) || l === letter);
    if (allLettersGuessed) setGameStatus("won");
  };

  // Restart game
  const restartGame = () => {
    setWordToGuess(randomWords[Math.floor(Math.random() * randomWords.length)]);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameStatus("playing");
  };

  return (
    <div className="App">
      <Header /> {/* Game header */}
      <Help /> {/* Help feature */}
      <HangmanGraphic wrongGuesses={wrongGuesses} /> {/* Hangman graphic */}
      <WordDisplay wordToGuess={wordToGuess} guessedLetters={guessedLetters} /> {/* Word */}
      <Keyboard handleGuess={handleGuess} guessedLetters={guessedLetters} /> {/* Keyboard */}
      <GameControls gameStatus={gameStatus} restartGame={restartGame} /> {/* Controls */}
    </div>
  );
}

export default App;