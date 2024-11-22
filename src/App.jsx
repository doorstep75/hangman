import React, { useState } from "react";
import Header from "./components/Header";
import HangmanGraphic from "./components/HangmanGraphic";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import GameControls from "./components/GameControls";
import randomWords from "./randomWords";

function App() {
  // Game state
  const [wordToGuess, setWordToGuess] = useState(
    randomWords[Math.floor(Math.random() * randomWords.length)] // Pick a random word
  );
  const [guessedLetters, setGuessedLetters] = useState([]); // Tracks guessed letters
  const [wrongGuesses, setWrongGuesses] = useState(0); // Tracks incorrect guesses
  const [gameStatus, setGameStatus] = useState("playing"); // "playing", "won", "lost"

  // Function to handle letter guesses
  const handleGuess = (letter) => {
    // Prevent additional guesses if the game is over or the letter is already guessed
    if (guessedLetters.includes(letter) || gameStatus !== "playing") return;
  
    setGuessedLetters([...guessedLetters, letter]);
  
    if (!wordToGuess.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
  
      // End the game if wrong guesses reach the limit (8)
      if (newWrongGuesses >= 9) {
        setGameStatus("lost");
      }
    }
  
    // Check if all letters are guessed correctly
    const allLettersGuessed = wordToGuess
      .split("")
      .every((l) => guessedLetters.includes(l) || l === letter);
  
    if (allLettersGuessed) {
      setGameStatus("won");
    }
  };

  // Restart the game
  const restartGame = () => {
    setWordToGuess(randomWords[Math.floor(Math.random() * randomWords.length)]);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameStatus("playing");
  };

  return (
    <div className="App">
      <Header />
      <HangmanGraphic wrongGuesses={wrongGuesses} />
      <WordDisplay wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <Keyboard handleGuess={handleGuess} guessedLetters={guessedLetters} />
      <GameControls gameStatus={gameStatus} restartGame={restartGame} />
    </div>
  );
}

export default App;