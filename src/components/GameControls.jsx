import React from "react";
import "./../styles/GameControls.css"; // Import the CSS for styling this component

// Component to display game status and restart button
const GameControls = ({ gameStatus, restartGame }) => {
  return (
    <div className="GameControls">
      {/* Display message for winning the game */}
      {gameStatus === "won" && <p>Congratulations! You won! 🎉</p>}

      {/* Display message for losing the game */}
      {gameStatus === "lost" && (
        <p>
          Game Over! It was a tricky word, but have another go! 🤞
        </p>
      )}

      {/* Button to restart the game */}
      <button onClick={restartGame} className="restart-button">
        Restart Game
      </button>
    </div>
  );
};

export default GameControls; // Export the component for use in other parts of the app