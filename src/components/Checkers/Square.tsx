import { Show } from "solid-js";
import {
  checkers,
  selected,
  setSelected,
  isValidMove,
  moveChecker,
  type Checker
} from "./game";
import styles from "./Checker.module.css";

export default function Square(props: { row: number; col: number }) {
  const dark = (props.row + props.col) % 2 === 1;
  const checker = () => checkers().find((checker) => checker.position[0] === props.row && checker.position[1] === props.col);

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
      <Show when={isValidMove([props.row, props.col])}>
        <button
          onClick={() => moveChecker([props.row, props.col])}
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
      <div
        class={`w-full aspect-square ${styles["checker"]}`}
        style={{ "background-color": props.checker.color }}
      />
    </button>
  );
}
