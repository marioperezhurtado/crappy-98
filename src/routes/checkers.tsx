import Window from "~/components/Window";
import Board from "~/components/Checkers/Board";

export default function CheckersPage() {
  return (
      <Window title="Checkers" icon="/checkers/logo.png">
        <div class="pt-20 bg-white h-full">
          <Board />
        </div>
      </Window>
  );
}
