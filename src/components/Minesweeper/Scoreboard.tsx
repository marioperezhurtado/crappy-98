import { createSignal } from "solid-js";

const [time, setTime] = createSignal(0);
const [score, setScore] = createSignal(99);

export default function ScoreBoard() {
  return (
    <div class="flex justify-between items-center gap-4 border-4 border-t-zinc-400 border-l-zinc-400 max-w-screen-md mx-auto w-full px-2">
      <Score score={score()} />
      <div class="border-2 border-b-black border-r-black aspect-square flex items-center justify-center p-1 m-2">
        <img
          src="/minesweeper/smile.webp"
          alt="Smile"
          class="h-8"
          height="32"
          draggable={false}
        />
      </div>
      <Score score={time()} />
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

