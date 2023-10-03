import { Title } from "solid-start";
import Window from "~/components/Window";
import Board from "~/components/Board";

export default function Home() {
  return (
    <Window>
      <Title>Hello World</Title>
      <h1 class="sr-only">Crappy Games</h1>
      <img src="crappy-games.png" alt="Crappy Games" class="w-96 mx-auto" />
      <Board />
    </Window>
  );
}

