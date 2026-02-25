import { useState, type ReactNode } from "react";
import {
  END_TILE_CONFIGURATION,
  START_TILE_CONFIGURATION,
} from "../utils/constants";
import type { TileType } from "../utils/types";
import { TileContext } from "../context/TileContext";

export const TileProvider = ({ children }: { children: ReactNode }) => {
  const [startTile, setStartTile] = useState<TileType>(
    START_TILE_CONFIGURATION,
  );
  const [endTile, setEndTile] = useState<TileType>(END_TILE_CONFIGURATION);

  return (
    <TileContext.Provider
      value={{ startTile, setStartTile, endTile, setEndTile }}
    >
      {children}
    </TileContext.Provider>
  );
};
