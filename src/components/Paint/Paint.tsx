import Canvas from "./Canvas";
import ColorSelector from "./ColorSelector";
import ToolBox, { tool } from "./ToolBox";
import { primaryColor } from "./ColorSelector";

export default function Paint() {
  const color = () => tool().name === "Eraser" ? "#ffffff" : primaryColor();

  return (
    <div class="flex flex-col h-full">
      <div class="flex flex-grow">
        <ToolBox />
        <div style={{ cursor: `url(${tool().cursor}), auto` }}>
          <Canvas 
            size={tool().size} 
            color={color()}
          />
        </div>
      </div>
      <ColorSelector />
    </div>
  );
}
