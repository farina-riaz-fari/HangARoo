import React from "react";

interface NewGamePopupProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const NewGamePopup: React.FC<NewGamePopupProps> = ({ onClick, children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center z-50">
      <div className="bg-blue-700 px-12 py-8 rounded-2xl border-4 border-yellow-400">
        <button
          className="bg-green-500 text-white text-3xl border-2 border-yellow-400 font-bold p-6 rounded-xl px-6 py-2 hover:bg-green-600"
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default NewGamePopup;
