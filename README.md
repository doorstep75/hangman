# Hangman Game

A simple Hangman game built with React. Guess the word before the hangman is fully drawn!

## Features
- Dynamic word generation with a focus on web development terminology.
- Interactive keyboard for guessing letters.
- Displays game status (win/lose) with an option to restart the game.

## Rules of the Game
1. The game picks a random word related to web development.
2. You guess the word letter by letter.
3. For each incorrect guess, part of the hangman is drawn.
4. You lose if the hangman is fully drawn (9 incorrect guesses).
5. You win if you guess the word correctly before reaching the limit.

## Installation

Follow these steps to run the game on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/doorstep75/hangman.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd hangman
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the application**:
   ```bash
   npm start
   ```
5. Open your browser and visit:
   http://localhost:3000

## Technologies Used

- React: Frontend library for building the user interface.
- CSS: For styling the components.
- JavaScript: Core language for the app logic.

## Directory Structure

```plaintext
hangman/
├── public/          # Public assets and HTML template
├── src/             # Source files
│   ├── components/  # React components
│   ├── styles/      # Component-specific CSS files
│   ├── App.jsx      # Main app logic
│   ├── index.js     # Entry point
├── .gitignore       # Ignored files and directories
├── package.json     # Project metadata and dependencies
├── README.md        # Project information and instructions
```

## Contributing

Feel free to fork this repository and contribute by submitting pull requests.

## License

This project is open source and available under the MIT License.