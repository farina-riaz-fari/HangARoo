type Props = {
  onGuess: (letter: string) => void;
  disabledLetters: string[];
};

const Keyboard = ({ onGuess, disabledLetters }: Props) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="grid grid-cols-13 gap-2 max-w-3xl mx-auto border-2 border-blue-400 bg-gradient-to-b from-yellow-500 to-yellow-600 p-4 rounded-2xl mb-12">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={disabledLetters.includes(letter)}
          className="bg-blue-700 text-white text-2xl rounded-xl px-4 py-2 font-extrabold border-2 border-blue-800 flex justify-center items-center disabled:bg-yellow-400 disabled:border-yellow-400"
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
