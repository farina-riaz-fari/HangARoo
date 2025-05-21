import { createContext, useState, useEffect, type ReactNode } from "react";
import { openDB } from "idb";

export interface GameProps {
  id: string;
  guessedWord: string;
  status: "won" | "lost";
  phrase: string;
}

interface GameContextProps {
  game: GameProps[];
  saveGameResult: (game: GameProps) => void;
}

export const HangArooContext = createContext<GameContextProps>({
  game: [],
  saveGameResult: () => {},
});

const DB_NAME = "Game";
const STORE_NAME = "game";

const getDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    },
  });
};

export const HangARooProvider = ({ children }: { children: ReactNode }) => {
  const [hangaroo, setHangaroo] = useState<GameProps[]>([]);

  const loadGame = async () => {
    const db = await getDB();
    const gameList = await db.getAll(STORE_NAME);
    setHangaroo(gameList);
  };

  useEffect(() => {
    loadGame();
  }, []);

  const saveGameResult = async (game: GameProps) => {
    const db = await getDB();
    await db.put(STORE_NAME, game);
    setHangaroo((prevGame) => [...prevGame, game]);
  };

  return (
    <HangArooContext.Provider value={{ game: hangaroo, saveGameResult }}>
      {children}
    </HangArooContext.Provider>
  );
};
