import { createSignal } from "solid-js";

const [time, setTime] = createSignal(0);
const [score, setScore] = createSignal(99);

export default function ScoreBoard() {
  return (
    <div class="flex gap-4 justify-between items-center px-2 mx-auto w-full max-w-screen-md border-4 border-t-zinc-400 border-l-zinc-400">
      <Score score={score()} />
      <div class="flex justify-center items-center p-1 m-2 border-2 border-b-black border-r-black aspect-square">
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
    <div class="relative pr-0.5 pl-1 h-11 bg-black border-2 border-t-zinc-400 border-l-zinc-400">
      <p class="-mt-3.5 h-10 text-5xl text-red-500 opacity-50 font-digital">000</p>
      <p class="absolute top-0 -mt-3.5 text-5xl text-red-500 font-digital">
        {props.score.toString().padStart(3, "0")}
      </p>
    </div>
  );
}

