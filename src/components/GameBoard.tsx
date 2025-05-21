import { useContext, useEffect, useState } from "react";
import PhraseDisplay from "./PhraseDisplay";
import Keyboard from "./Keyboard";
import Result from "./Result";
import NewGamePopup from "./Popup";
import { HangArooContext } from "../store/gameContext";

export const WORDS = [
  { phrase: "hello world", hint: "Common programming phrase" },
  { phrase: "typescript rocks", hint: "Typed Javascript Language" },
  { phrase: "hangaroo", hint: "This game's name." },
  { phrase: "react is fun", hint: "Frontend library opinion" },
  { phrase: "tailwind css", hint: "Utility-first CSS framework" },
  { phrase: "frontend developer", hint: "A web developer role" },
  { phrase: "backend developer", hint: "A web developer role" },
  { phrase: "game over", hint: "When you lose." },
  { phrase: "javascript ninja", hint: "JS expert nickname" },
  { phrase: "game won", hint: "When you won" },
];
const MAX_WRONG = 4;

const getRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)];

const GameBoard = () => {
  const [secretPhrase, setSecretPhrase] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">(
    "playing"
  );
  const [showPopup, setShowPopup] = useState(false);
  const { saveGameResult } = useContext(HangArooContext);

  const handleGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || gameStatus !== "playing") {
      return;
    }
    const updatedGuessed = [...guessedLetters, letter];
    setGuessedLetters(updatedGuessed);
    if (!secretPhrase.phrase.toLowerCase().includes(letter)) {
      setWrongGuesses((prev) => prev + 1);
    }
  };
  const resetGame = () => {
    setSecretPhrase(getRandomWord());
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameStatus("playing");
    setShowPopup(false);
  };

  useEffect(() => {
    const normalizePhrase = secretPhrase.phrase
      .toLowerCase()
      .replace(/[^a-z]/g, "");
    const allGuessed = normalizePhrase
      .split("")
      .every((char) => guessedLetters.includes(char));
    if (allGuessed) {
      saveGameResult({
        id: crypto.randomUUID(),
        guessedWord: secretPhrase.phrase,
        status: "won",
        phrase: secretPhrase.phrase,
      });
      setGameStatus("won");
      setShowPopup(true);
    } else if (wrongGuesses >= MAX_WRONG) {
      saveGameResult({
        id: crypto.randomUUID(),
        guessedWord: secretPhrase.phrase,
        status: "lost",
        phrase: secretPhrase.phrase,
      });
      setGameStatus("lost");
      setShowPopup(true);
    }
  }, [guessedLetters, wrongGuesses, secretPhrase]);

  return (
    <div>
      <Result wrongGuesses={wrongGuesses} />
      {showPopup && (
        <NewGamePopup onClick={resetGame}>
          {gameStatus === "won" ? "New Game" : "Try Again"}
        </NewGamePopup>
      )}
      <Keyboard onGuess={handleGuess} disabledLetters={guessedLetters} />
      <PhraseDisplay
        phrase={secretPhrase.phrase}
        guessedLetters={guessedLetters}
        hint={secretPhrase.hint}
      />

      <p className="mt-4 text-xl">
        Wrong guesses: {wrongGuesses} / {MAX_WRONG}
      </p>
    </div>
  );
};

export default GameBoard;
