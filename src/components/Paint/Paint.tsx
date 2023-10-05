import { createSignal, For } from "solid-js";
import Canvas from "./Canvas";

const PRESET_COLORS = [
  "#000000", "#87888f", "#A80057", "#A8A857", "#00A857",
  "#57a8a8", "#0000a8", "#a857a8", "#979872", "#2B5353",
  "#007fff", "#2b53a8", "#3c02ff", "#a8535e", "#ffffff",
  "#C2CAC9", "#F90203", "#fbfb1c", "#01FF00", "#01fdff",
  "#0300f9", "#ff00ff", "#fffd7d", "#02fb81", "#7dffff",
  "#817fff", "#ff007e", "#fc8036",
];

const [primaryColor, setPrimaryColor] = createSignal("#000000");
const [secondaryColor, setSecondaryColor] = createSignal("#ffffff");

export default function Paint() {
  return (
    <div class="flex flex-col h-full">
      <Canvas size={5} color={primaryColor()} />
      <ColorSelector />
    </div>
  );
}

function ColorSelector() {
  return (
    <div class="bg-zinc-300 py-6 px-2 flex items-center gap-2">
      <ul class="grid gap-x-1 gap-y-0.5 w-fit"
        style={{ "grid-template-columns": "repeat(16, 1fr)" }}
      >
        <ColorToggle />
        <For each={PRESET_COLORS}>
          {(color) => (
            <li>
              <button
                onClick={() => setPrimaryColor(color)}
                class="w-6 h-6 border-2 border-t-black border-l-black outline-white"
                style={{ "background-color": color }}
              />
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}

function ColorToggle() {
  function toggleColors() {
    const primary = primaryColor();
    const secondary = secondaryColor();
    setPrimaryColor(secondary);
    setSecondaryColor(primary);
  }

  return (
    <button onClick={toggleColors} class="relative col-span-2 row-span-2 aspect-square border-2 border-t-black border-l-black bg-mesh">
      <div class="absolute bottom-2 right-2 h-6 w-6 border-2 border-b-black border-r-black"
        style={{ "background-color": secondaryColor() }}
      />
      <div class="absolute top-2 left-2 h-6 w-6 border-2 border-t-black border-l-black"
        style={{ "background-color": primaryColor() }}
      />
    </button>
  );
}
