import Window from "~/components/Window";
import Paint from "~/components/Paint/Paint";

export default function PaintPage() {
  return (
      <Window title="Paint" icon="/paint/logo.png">
        <div class="h-full bg-white">
          <Paint />
        </div>
      </Window>
  );
}
