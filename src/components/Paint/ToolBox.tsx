import { createSignal, For } from "solid-js";
import type { JSX } from "solid-js";

const TOOLS = [
  {
    name: "Pencil",
    icon: "/paint/pencil.webp",
    size: 2,
  },
  {
    name: "Brush",
    icon: "/paint/brush.webp",
    size: 5,
  },
];

export const [tool, setTool] = createSignal(TOOLS[0]);

export default function ToolBox() {
  return (
    <aside class="grid grid-cols-2 gap-1 bg-zinc-300 h-full border-r-2 w-24 p-2 border-zinc-200">
      <For each={TOOLS}>
        {(t) => (
          <ToolButton onClick={() => setTool(t)} selected={tool().name === t.name}>
            <img src={t.icon} alt={t.name} draggable={false}/>
          </ToolButton>
        )}
      </For>
    </aside >
  );
}

function ToolButton(props: { selected: boolean } & JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      class="bg-zinc-300 px-1 border-black aspect-square border-2 border-t-zinc-100 border-l-zinc-100 flex items-center justify-center transition"
      classList={{ "!border-zinc-100 !border-t-black !border-l-black bg-mesh": props.selected }}
    >
      {props.children}
    </button>
  );
}
