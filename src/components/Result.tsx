interface ResultProps {
  wrongGuesses: number;
}

const Result: React.FC<ResultProps> = ({ wrongGuesses }) => {
  return (
    <div className="flex gap-6 p-4 rounded-2xl justify-center mb-10">
      {[...Array(4)].map((_, i) => {
        const isWrong = i < wrongGuesses;
        const borderColor = isWrong ? "border-red-600" : "border-gray-600";
        const bgColor = isWrong ? "bg-yellow-400" : "bg-transparent";
        const textColor = isWrong ? "text-red-600" : "text-gray-600";

        return (
          <div
            key={i}
            className={`h-23 w-21 border-4 ${borderColor} ${bgColor} rounded-md relative`}
          >
            <div
              className={`font-extrabold text-9xl ${textColor} absolute top-[-1.5rem] left-[-0.3rem]`}
            >
              X
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Result;
