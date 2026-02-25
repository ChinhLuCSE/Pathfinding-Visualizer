import { createContext } from "react";
import type { TileType } from "../utils/types";


interface TileContextInterface {
    startTile: TileType;
    setStartTile: (startTile: TileType) => void;
    endTile: TileType;
    setEndTile: (endTile: TileType) => void;
}

export const TileContext = createContext<TileContextInterface | undefined>(undefined);