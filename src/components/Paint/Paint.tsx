import Canvas from "./Canvas";
import ColorSelector from "./ColorSelector";
import ToolBox, { tool } from "./ToolBox";
import { primaryColor } from "./ColorSelector";

export default function Paint() {
  return (
    <div class="flex flex-col h-full">
      <div class="flex flex-grow">
        <ToolBox />
        <Canvas size={tool().size} color={primaryColor()} />
      </div>
      <ColorSelector />
    </div>
  );
}

