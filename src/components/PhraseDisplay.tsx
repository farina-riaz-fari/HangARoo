type Props = {
  phrase: string;
  guessedLetters: string[];
  hint?: string;
};

const TOTAL_BLOCKS = 56;
const PHRASE_START_INDEX = 14;

const PhraseDisplay: React.FC<Props> = ({ phrase, guessedLetters, hint }) => {
  const characters = phrase.split("");
  const gridBlocks = Array(TOTAL_BLOCKS).fill("");
  for (
    let i = 0;
    i < characters.length && PHRASE_START_INDEX + i < TOTAL_BLOCKS;
    i++
  ) {
    gridBlocks[PHRASE_START_INDEX + i] = characters[i];
  }
  return (
    <>
      <div className="grid grid-cols-14 gap-2 p-4 rounded-2xl bg-yellow-600 w-fit mx-auto mb-6">
        {gridBlocks.map((char, i) => {
          const isPhraseChar = char !== "" && char !== " ";
          const isGuessed = guessedLetters.includes(char.toLowerCase());

          return (
            <div
              key={i}
              className={`h-12 w-12 flex items-center justify-center rounded-lg font-bold text-xl ${
                isPhraseChar ? "bg-blue-600 text-white" : "bg-yellow-700"
              }`}
            >
              {isPhraseChar && isGuessed ? char.toUpperCase() : ""}
            </div>
          );
        })}
      </div>
      <div className="absolute py-1 px-12 bg-blue-600 w-max border-2 border-yellow-400 text-white font-bold text-2xl top-[342px] left-1/2 ml-30 right-1/2 transform -translate-x-1/2 rounded-lg">
        {hint}
      </div>
    </>
  );
};

export default PhraseDisplay;
