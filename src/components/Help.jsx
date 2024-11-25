import React, { useState } from "react";
import "./../styles/Help.css"; // Create a new CSS file for styling

const Help = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the help modal
  const toggleHelp = () => setIsVisible(!isVisible);

  return (
    <div className="Help">
      {/* Help button */}
      <button onClick={toggleHelp} className="help-button">
        {isVisible ? "Close Help" : "Help"}
      </button>

      {/* Help modal */}
      {isVisible && (
        <div className="help-modal">
          <h2>How to Play Hangman</h2>
          <p>1. A random word is chosen for you to guess.</p>
          <p>2. Guess the word letter by letter using the on-screen keyboard.</p>
          <p>3. Each incorrect guess draws part of the hangman.</p>
          <p>4. You lose if the hangman is fully drawn after 9 incorrect guesses.</p>
          <p>5. Win by guessing the word before the hangman is fully drawn!</p>
          <p>6. You can restart any time by clicking on the restart game button.</p>
        </div>
      )}
    </div>
  );
};

export default Help;