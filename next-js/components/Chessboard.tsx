"use client";

import { useState } from "react";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

const Chessboard = () => {
  const [isWhitePlayer, setIsWhitePlayer] = useState(true); // Track which side the player is

  const board = [];

  // Adjust row and column order based on the player's side
  const rows = isWhitePlayer ? [...verticalAxis].reverse() : verticalAxis;
  const columns = isWhitePlayer
    ? horizontalAxis
    : [...horizontalAxis].reverse();

  // Populate the chessboard cells with correct coloring logic
  for (let j = 0; j < rows.length; j++) {
    for (let i = 0; i < columns.length; i++) {
      // Correct color logic: (i + j) should be odd for dark squares
      const isDarkSquare = (i + j) % 2 !== 0;

      board.push(
        <div
          key={`${columns[i]}${rows[j]}`}
          className={`w-1/8 h-1/8 flex items-center justify-center 
            ${
              isDarkSquare
                ? "bg-[#779556] black-tile"
                : "bg-[#ebecd0] white-tile"
            }`}
        >
          {/* Placeholder for pieces or other content */}
        </div>
      );
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="absolute top-4 right-4">
        {/* Toggle button to switch sides */}
        <button
          onClick={() => setIsWhitePlayer(!isWhitePlayer)}
          className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700"
        >
          Play as {isWhitePlayer ? "Black" : "White"}
        </button>
      </div>

      <div
        className="
          relative 
          lg:h-[90vh] lg:w-[90vh] 
          w-[93vw] h-[93vw] 
          grid grid-cols-8 grid-rows-8
          border border-black
        "
      >
        {board}

        {/* Horizontal axis labels */}
        {columns.map((label, index) => (
          <span
            key={`h-${index}`}
            className="absolute bottom-0 left-[12.5%] translate-y-full text-sm font-semibold
                       lg:left-[calc((100%/8)*index)] w-[12.5%] text-center 
                       bg-[#ebecd0] text-black border border-black/30"
            style={{ left: `${index * 12.5}%` }}
          >
            {label}
          </span>
        ))}

        {/* Vertical axis labels */}
        {rows.map((label, index) => (
          <span
            key={`v-${index}`}
            className="absolute top-[12.5%] -translate-x-full text-sm font-semibold 
                       text-black lg:top-[calc((100%/8)*index)] h-[12.5%] text-center 
                       bg-[#ebecd0] border border-black/30"
            style={{ top: `${index * 12.5}%` }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Chessboard;
