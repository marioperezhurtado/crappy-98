import { For } from "solid-js";

const SIZE = [16, 30];

export default function Mines() {
  return (
    <div class="border-4 border-t-zinc-400 border-l-zinc-400 w-full max-w-screen-md mx-auto">
      <For each={[...Array(SIZE[0]).keys()]}>
        {(row) => (
          <div class="flex">
            <For each={[...Array(SIZE[1]).keys()]}>
              {(col) => (
                <button
                  class="bg-zinc-300 border-[3px] border-b-zinc-500 border-r-zinc-400 aspect-square flex-1">
                </button>
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  );
}
