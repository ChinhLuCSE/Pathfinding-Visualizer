# Pathfinding Visualizer

🔗 **Live Demo:** https://your-project.vercel.app  

A lightweight **Pathfinding Algorithm Visualizer** built with **React + TypeScript + Vite** and styled with **Tailwind CSS v4**. Draw walls on a grid, generate mazes, and watch popular pathfinding algorithms explore and find the shortest path.

**Grid:** 39 rows × 49 columns

## ✨ Features

- **Interactive Grid Editor**
  - Click or drag to toggle walls
  - Fixed start/end tiles (protected from walls)

- **Pathfinding Algorithms**
  - Breadth-First Search (BFS)
  - Depth-First Search (DFS)
  - Dijkstra
  - A* (Manhattan heuristic)

- **Maze Generation**
  - Binary Tree
  - Recursive Division

- **Visualization Controls**
  - Speed adjustment (Slow / Medium / Fast)
  - Smooth animations with Tailwind keyframes

## 🧠 How It Works

The visualizer runs your selected algorithm to:
1. Explore tiles and record traversal order
2. Backtrack from end to start using parent pointers to find the path
3. Animate results by updating tile classes over time (speed-scaled)

## 🚀 Quick Start

**Requirements:** Node.js (latest LTS recommended)

**Commands:**
```bash
npm install
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview build
npm run lint     # Lint code
```

## 🎮 Usage

1. Configure settings: Select maze type, algorithm, and visualization speed
2. Click or drag to draw walls on the grid
3. Press Play to visualize the algorithm

> Pressing Play again resets the grid before re-running

## 🧱 Tech Stack

React 19 • TypeScript • Vite • Tailwind CSS v4

## 📁 Project Structure

```
src/
├── components/        # Grid, Tile, Nav UI
├── lib/algorithms/    # Pathfinding & maze generation
├── providers/         # Context providers
└── utils/             # Helpers & constants
```

## 📝 Notes

- Start and end tile positions are fixed (see configuration)

**Built by** @chinhlucse
