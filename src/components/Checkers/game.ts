import { createSignal } from "solid-js";

export type Position = [number, number];

export type Checker = {
  position: Position;
  color: "red" | "white";
  isKing: boolean;
};

export const [checkers, setCheckers] = createSignal<Checker[]>([
  { position: [0, 1], color: "red", isKing: false },
  { position: [0, 3], color: "red", isKing: false },
  { position: [0, 5], color: "red", isKing: false },
  { position: [0, 7], color: "red", isKing: false },
  { position: [1, 0], color: "red", isKing: false },
  { position: [1, 2], color: "red", isKing: false },
  { position: [1, 4], color: "red", isKing: false },
  { position: [1, 6], color: "red", isKing: false },
  { position: [2, 1], color: "red", isKing: false },
  { position: [2, 3], color: "red", isKing: false },
  { position: [2, 5], color: "red", isKing: false },
  { position: [2, 7], color: "red", isKing: false },
  { position: [5, 0], color: "white", isKing: false },
  { position: [5, 2], color: "white", isKing: false },
  { position: [5, 4], color: "white", isKing: false },
  { position: [5, 6], color: "white", isKing: false },
  { position: [6, 1], color: "white", isKing: false },
  { position: [6, 3], color: "white", isKing: false },
  { position: [6, 5], color: "white", isKing: false },
  { position: [6, 7], color: "white", isKing: false },
  { position: [7, 0], color: "white", isKing: false },
  { position: [7, 2], color: "white", isKing: false },
  { position: [7, 4], color: "white", isKing: false },
  { position: [7, 6], color: "white", isKing: false },
]);

const [playing, setPlaying] = createSignal<"red" | "white">("white");
export const [selected, setSelected] = createSignal<Checker | null>(null);

export function isValidMove(position: Position) {
  const checker = selected();
  if (!checker) return false;

  const [row, col] = position;
  const [checkerRow, checkerCol] = checker.position;

  const isDiagonal = Math.abs(row - checkerRow) === Math.abs(col - checkerCol);
  const isForward = checker.color === "red" ? row > checkerRow : row < checkerRow;
  const isOneSquare = Math.abs(row - checkerRow) === 1;
  const isOccupied = checkers().find((c) => c.position[0] === row && c.position[1] === col);

  return isDiagonal && isForward && isOneSquare && !isOccupied;
}

function changeTurn() {
  setPlaying(playing() === "red" ? "white" : "red");
}

export function moveChecker(position: Position) {
  const checker = selected();
  if (!checker) return;

  setCheckers(
    checkers().map((c) => {
      if (c === checker) {
        return { ...c, position };
      }
      return c;
    })
  );
  setSelected(null);
  changeTurn();
}
