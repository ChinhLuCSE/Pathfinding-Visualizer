import type { GridType, TileType } from "./types";

export const getUntraversedNeighbors = (grid: GridType, tile: TileType) => {
    const { row, col } = tile; // Destructure the row and column from the tile
    const neighbors = []; 

    if (row > 0) {
        neighbors.push(grid[row - 1][col]); // Add the top neighbor if it exists
    }
    if (row < grid.length - 1) {
        neighbors.push(grid[row + 1][col]); // Add the bottom neighbor if it exists
    }
    if (col > 0) {
        neighbors.push(grid[row][col - 1]); // Add the left neighbor if it exists
    }
    if (col < grid[0].length - 1) {
        neighbors.push(grid[row][col + 1]); // Add the right neighbor if it exists
    }
    return neighbors.filter((neighbor) => !neighbor.isTraversed); // Return the array of untraversed neighbors
}