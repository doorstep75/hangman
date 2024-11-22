import React from "react";
import "./../styles/Keyboard.css"; // Import the CSS for styling the keyboard

// Component to display a clickable keyboard for guessing letters
const Keyboard = ({ handleGuess, guessedLetters }) => {
  // Define the alphabet as an array
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="Keyboard">
      {/* Render a button for each letter in the alphabet */}
      {alphabet.map((letter) => (
        <button
          key={letter} // Unique key for each button
          onClick={() => handleGuess(letter)} // Call handleGuess when the button is clicked
          disabled={guessedLetters.includes(letter)} // Disable button if the letter was already guessed
          className="key" // Add a CSS class for styling
        >
          {letter} {/* Display the letter on the button */}
        </button>
      ))}
    </div>
  );
};

export default Keyboard; // Export the component for use in other parts of the app