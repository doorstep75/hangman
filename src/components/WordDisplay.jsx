import React from "react";
import "./../styles/WordDisplay.css"; // Import the CSS for styling the word display

// Component to display the word being guessed, showing letters or underscores
const WordDisplay = ({ wordToGuess, guessedLetters }) => {
  return (
    <div className="WordDisplay">
      {/* Split the word into individual letters and map over them */}
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index} // Unique key for each letter span
          className="letter" // Add a CSS class for styling
        >
          {/* Show the letter if guessed, otherwise display an underscore */}
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay; // Export the component for use in other parts of the app