import Minesweeper from "~/components/Minesweeper/Minesweeper";
import Window from "~/components/Window";

export default function MineSweeperPage() {
  return (
    <Window title="MineSweeper" icon="/minesweeper/logo.webp">
      <div class="flex flex-col gap-3 p-3 h-full bg-zinc-300">
        <Minesweeper />
      </div>
    </Window>
  );
}
