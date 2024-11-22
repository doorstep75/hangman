import React from "react";
import "./../styles/Header.css"; // Import the CSS for styling the header

// Component to display the main title of the game
const Header = () => {
  return (
    <header className="Header">
      <h1>Hangman Game</h1> {/* Game title displayed prominently */}
    </header>
  );
};

export default Header; // Export the component for use in other parts of the app