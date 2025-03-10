import Tile from "./Tile";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function Chessboard() {
  const board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      board.push(
        <Tile key={`${i}, ${j}`} coords={`${i}, ${j}`} number={number} />
      );
    }
  }

  return (
    <div id="chessboard" className="grid grid-cols-8 grid-rows-8 size-[93vh]">
      {board}
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import Tile from "./Tile";

// const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

// const Chessboard = () => {
//   const [isWhitePlayer, setIsWhitePlayer] = useState(true);

//   // Adjust row and column order based on the player's side
//   const rows = isWhitePlayer ? [...verticalAxis].reverse() : verticalAxis;
//   const cols = isWhitePlayer ? horizontalAxis : [...horizontalAxis].reverse();

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       {/* Toggle button to switch sides */}
//       <button
//         onClick={() => setIsWhitePlayer(!isWhitePlayer)}
//         className="absolute top-4 right-4 px-4 py-2 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700"
//       >
//         Play as {isWhitePlayer ? "Black" : "White"}
//       </button>

//       <div className="relative lg:h-[90vh] lg:w-[90vh] w-[93vw] h-[93vw] grid grid-cols-8 grid-rows-8 border border-black">
//         {/* Generate the board tiles */}
//         {rows.map((row, j) =>
//           rows.map((row, j) =>
//             cols.map((col, i) => (
//               <Tile
//                 key={`${col}${row}`}
//                 position={`${col}${row}`}
//                 isDark={(i + j) % 2 !== 0}
//               />
//             ))
//           )
//         )}

//         {/* Horizontal axis labels */}
//         {cols.map((label, i) => (
//           <span
//             key={`h-${i}`}
//             className="absolute bottom-0 text-xs font-semibold w-[12.5%] text-center bg-[#ebecd0] text-black/30 border border-black/30"
//             style={{ left: `${i * 12.5}%`, transform: "translateY(100%)" }}
//           >
//             {label}
//           </span>
//         ))}

//         {/* Vertical axis labels */}
//         {rows.map((label, i) => (
//           <span
//             key={`v-${i}`}
//             className="absolute left-0 text-sm font-semibold h-[12.5%] flex items-center bg-[#ebecd0] text-black/30 border border-black/30"
//             style={{ top: `${i * 12.5}%`, transform: "translateX(-100%)" }}
//           >
//             {label}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chessboard;
