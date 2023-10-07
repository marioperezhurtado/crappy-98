import { For } from "solid-js";
import Window from "~/components/Window";

export default function MineSweeperPage() {
  return (
    <Window title="MineSweeper" icon="/minesweeper/logo.webp">
      <div class="bg-zinc-300 h-full p-3 flex flex-col gap-3">
        <ScoreBoard />
        <Mines />
      </div>
    </Window>
  );
}

function ScoreBoard() {
  return (
    <div class="flex justify-between items-center gap-4 border-4 border-t-zinc-400 border-l-zinc-400 max-w-screen-md mx-auto w-full px-2">
      <Score score={99} />
      <div class="border-2 border-b-black border-r-black aspect-square flex items-center justify-center p-1 m-2">
        <img
          src="/minesweeper/smile.webp"
          alt="Smile"
          class="h-8"
          height="32"
          draggable={false}
        />
      </div>
      <Score score={10} />
    </div>
  );
}

function Score(props: { score: number }) {
  return (
    <div class="relative bg-black h-11 pl-1 pr-0.5 border-2 border-t-zinc-400 border-l-zinc-400">
      <p class="font-digital text-5xl text-red-500 opacity-50 h-10 -mt-3.5">000</p>
      <p class="font-digital text-5xl absolute top-0 text-red-500 -mt-3.5">
        {props.score.toString().padStart(3, "0")}
      </p>
    </div>
  );
}


const SIZE = [16, 30];

function Mines() {
  return (
    <div class="border-4 border-t-zinc-400 border-l-zinc-400 w-full max-w-screen-md mx-auto p-2">
      <For each={[...Array(SIZE[0]).keys()]}>
        {(row) => (
          <div class="flex">
            <For each={[...Array(SIZE[1]).keys()]}>
              {(col) => (
                <button class="bg-zinc-300 border-2 border-b-black border-r-black aspect-square flex-1">
                </button>
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  );
}

