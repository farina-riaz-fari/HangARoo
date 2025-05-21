import { openDB } from "idb";
import type { GameProps } from "../store/gameContext";

const DB_NAME = "Game";
const STORE_NAME = "game";

export const getDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    },
  });
};

export const saveGameToDB = async (game: GameProps) => {
  const db = await getDB();
  await db.put(STORE_NAME, game);
};

export const getAllGameDetailFromDB = async () => {
  const db = await getDB();
  return await db.getAll(STORE_NAME);
};
