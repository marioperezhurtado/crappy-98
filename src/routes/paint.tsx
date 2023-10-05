import Window from "~/components/Window";
import Paint from "~/components/Paint/Paint";

export default function PaintPage() {
  return (
      <Window title="Paint">
        <div class="bg-white h-full">
          <Paint />
        </div>
      </Window>
  );
}
