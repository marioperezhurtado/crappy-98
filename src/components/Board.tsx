import { For, Show } from "solid-js";
import { createStore } from "solid-js/store";

const BOARD_SIZE = 8;

type Position = [number, number];

type Checker = {
  position: Position;
  color: "red" | "black";
  isKing: boolean;
};

const [checkers, setCheckers] = createStore<Checker[]>([
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
  { position: [5, 0], color: "black", isKing: false },
  { position: [5, 2], color: "black", isKing: false },
  { position: [5, 4], color: "black", isKing: false },
  { position: [5, 6], color: "black", isKing: false },
  { position: [6, 1], color: "black", isKing: false },
  { position: [6, 3], color: "black", isKing: false },
  { position: [6, 5], color: "black", isKing: false },
  { position: [6, 7], color: "black", isKing: false },
  { position: [7, 0], color: "black", isKing: false },
  { position: [7, 2], color: "black", isKing: false },
  { position: [7, 4], color: "black", isKing: false },
  { position: [7, 6], color: "black", isKing: false },
]);

export default function Board() {
  return (
    <section class="px-10 xs:px-14">
      <div class="max-w-md mx-auto shadow-md w-full p-2 bg-[#DEAA63] rounded-md"
        style={{ "transform": "perspective(1000px) rotateX(45deg)" }}
      >
        <div class="border-4 border-[#97570F]">
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

  return (
    <div
      class="w-full aspect-square"
      style={{ "background-color": dark ? "#97570F" : "#DEAA63" }}
    >
      <Show when={checkers.find((checker) => checker.position[0] === props.row && checker.position[1] === props.col)}>
        {(checker) => (
          <Checker checker={checker()} />
        )}
      </Show>
    </div>
  );
}

function Checker(props: { checker: Checker }) {
  return (
    <div class="w-full aspect-square p-1.5">
      <div class="w-full aspect-square rounded-full"
        style={{ "background-color": props.checker.color }}
      />
    </div>
  );
}
