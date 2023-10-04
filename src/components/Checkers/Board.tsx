import { For, Show, createSignal, createEffect } from "solid-js";
import styles from "./Checker.module.css";

const BOARD_SIZE = 8;

type Position = [number, number];

type Checker = {
  position: Position;
  color: "red" | "white";
  isKing: boolean;
};

const [checkers, setCheckers] = createSignal<Checker[]>([
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
const [selected, setSelected] = createSignal<Checker | null>(null);

function isValidMove(checker: Checker, position: Position) {
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

function moveChecker(checker: Checker, position: Position) {
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

export default function Board() {
  return (
    <section class="px-10 xs:px-14">
      <div class="max-w-sm mx-auto shadow-md w-full p-2 bg-[#E9EDCC] rounded-md"
        style={{ "transform": "perspective(1000px) rotateX(45deg)" }}
      >
        <div class="border-4 border-[#779954]">
          <For each={[...Array(BOARD_SIZE).keys()]}>
            {(row) => (
              <div class="flex">
                <For each={[...Array(BOARD_SIZE).keys()]}>
                  {(col) => (
                    <Square row={row} col={col} />
                  )}
                </For>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}

function Square(props: { row: number; col: number }) {
  const dark = (props.row + props.col) % 2 === 1;
  const checker = () => checkers().find((checker) => checker.position[0] === props.row && checker.position[1] === props.col);
  const canMoveTo = () => selected() && isValidMove(selected(), [props.row, props.col]);

  return (
    <div
      class="w-full aspect-square"
      style={{ "background-color": dark ? "#779954" : "#E9EDCC" }}
    >
      <Show when={checker()}>
        {(c) => (
          <Checker checker={c()} />
        )}
      </Show>
      <Show when={canMoveTo()}>
        <button
          onClick={() => moveChecker(selected()!, [props.row, props.col])}
          class="p-3 block w-full h-full"
        >
          <div class="w-full aspect-square bg-zinc-700/25 rounded-full " />
        </button>
      </Show>
    </div>
  );
}

function Checker(props: { checker: Checker }) {
  return (
    <button
      onClick={() => setSelected(props.checker)}
      class="w-full aspect-square p-1.5"
      classList={{
        "bg-[#BBCC44]": selected() === props.checker,
      }}
    >
      <div class={`w-full aspect-square ${styles["cylinder"]}`}
        style={{ "background-color": props.checker.color }}
      />
    </button>
  );
}
