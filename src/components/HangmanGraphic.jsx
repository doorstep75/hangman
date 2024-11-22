import React from "react";
import "./../styles/HangmanGraphic.css"; // Import the CSS for styling this component

/* Component to display the hangman graphic based on the number of wrong guesses.  Lots of comments here to 
help me keep my bearings */
const HangmanGraphic = ({ wrongGuesses }) => {
  return (
    <div className="HangmanGraphic">
      <svg height="250" width="200" className="hangman-svg">
        {/* Base of the hangman structure */}
        <line x1="10" y1="240" x2="150" y2="240" stroke="#333" strokeWidth="4" />

        {/* Pole for the hangman structure */}
        {wrongGuesses > 0 && <line x1="50" y1="240" x2="50" y2="20" stroke="#333" strokeWidth="4" />}

        {/* Beam at the top */}
        {wrongGuesses > 1 && <line x1="50" y1="20" x2="120" y2="20" stroke="#333" strokeWidth="4" />}

        {/* Rope hanging down */}
        {wrongGuesses > 2 && <line x1="120" y1="20" x2="120" y2="50" stroke="#333" strokeWidth="4" />}

        {/* Head of the hangman */}
        {wrongGuesses > 3 && <circle cx="120" cy="70" r="20" stroke="#333" strokeWidth="4" fill="none" />}

        {/* Body of the hangman */}
        {wrongGuesses > 4 && <line x1="120" y1="90" x2="120" y2="150" stroke="#333" strokeWidth="4" />}

        {/* Left arm */}
        {wrongGuesses > 5 && <line x1="120" y1="110" x2="90" y2="130" stroke="#333" strokeWidth="4" />}

        {/* Right arm */}
        {wrongGuesses > 6 && <line x1="120" y1="110" x2="150" y2="130" stroke="#333" strokeWidth="4" />}

        {/* Left leg */}
        {wrongGuesses > 7 && <line x1="120" y1="150" x2="90" y2="180" stroke="#333" strokeWidth="4" />}

        {/* Right leg */}
        {wrongGuesses > 8 && <line x1="120" y1="150" x2="150" y2="180" stroke="#333" strokeWidth="4" />}
      </svg>
    </div>
  );
};

export default HangmanGraphic; // Export the component for use in other parts of the app