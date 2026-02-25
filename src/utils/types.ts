export type AlgorithmType = "BFS" | "DFS" | "DIJKSTRA" | "A_STAR";
export interface AlgorithmSelectType {
    name: string;
    value: AlgorithmType;
}

export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";
export interface MazeSelectType {
    name: string;
    value: MazeType;
}

export type TileType = {
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    isWall: boolean;
    distance: number;
    isPath: boolean;
    parent: TileType | null;
    isTraversed: boolean;
}

export type GridType = TileType[][];

export type SpeedType = 2 | 1 | 0.5;
export interface SpeedSelectType {
    name: string;
    value: SpeedType;
}