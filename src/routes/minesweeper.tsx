import Minesweeper from "~/components/Minesweeper/Minesweeper";
import Window from "~/components/Window";

export default function MineSweeperPage() {
  return (
    <Window title="MineSweeper" icon="/minesweeper/logo.webp">
      <div class="bg-zinc-300 h-full p-3 flex flex-col gap-3">
        <Minesweeper />
      </div>
    </Window>
  );
}
