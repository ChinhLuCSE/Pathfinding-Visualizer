import { type ReactNode, useState } from "react";
import type { AlgorithmType, GridType, MazeType } from "../utils/types";
import { createGrid } from "../utils/helpers";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constants";
import { PathfindingContext } from "../context/PathfindingContext";
  

export const PathfindingProvider = ({ children }: { children: ReactNode }) => {
  const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
  const [maze, setMaze] = useState<MazeType>("NONE");
  const [grid, setGrid] = useState<GridType>(
    createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION)
  );
  const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);
  
  return (
    <PathfindingContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualized,
        setIsGraphVisualized,
      }}
    >
      {children}
    </PathfindingContext.Provider>
  );
};