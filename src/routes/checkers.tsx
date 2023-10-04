import Window from "~/components/Window";
import Board from "~/components/Checkers/Board";

export default function Home() {
  return (
      <Window title="Checkers">
        <div class="pt-20 bg-white h-full">
          <h1 class="sr-only">Crappy Games</h1>
          <img src="crappy-games.png" alt="Crappy Games" class="w-96 mx-auto" />
          <Board />
        </div>
      </Window>
  );
}
