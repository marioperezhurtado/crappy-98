import { For } from "solid-js";
import Square from "./Square";

const BOARD_SIZE = 8;

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

